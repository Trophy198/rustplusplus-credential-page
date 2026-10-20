/**
 * Pure farming maths: crossbreeding, growth time, harvest and farm sizing.
 * Formulas follow the decompiled server code (see ./constants).
 */
import type { Crop, Gene } from './constants';

export type Genes = Gene[];

const count = (genes: Genes, g: Gene) => genes.filter((x) => x === g).length;

// ---------- Crossbreeding ----------

export interface SlotResult {
  /** Gene after crossbreeding when the outcome is certain. */
  gene: Gene;
  /** Several gene types tied for the win: the result is one of these. */
  tie: Gene[] | null;
  changed: boolean;
  /** Summed neighbour weight per gene type for this slot. */
  tally: Partial<Record<Gene, number>>;
}

/**
 * What a plant's genes become when it enters the Crossbreed stage.
 *
 * For each slot, neighbours' genes are tallied by weight (W and X 1.0, G Y H
 * 0.6). The plant's own gene is not added; its weight is the bar. The top
 * type replaces the slot only if its tally is strictly greater than that bar.
 * The game breaks ties by which type reached the total first, which depends
 * on physics query order, so ties are reported as "one of".
 */
export function crossbreed(plant: Genes, neighbours: readonly Genes[], weight: Record<Gene, number>): SlotResult[] {
  return plant.map((own, slot) => {
    const tally: Partial<Record<Gene, number>> = {};
    for (const n of neighbours) tally[n[slot]] = (tally[n[slot]] ?? 0) + weight[n[slot]];
    const best = Math.max(0, ...Object.values(tally));
    // Compare with a small epsilon: 0.6 + 0.6 must beat 1.0 and tie with 1.2.
    const leaders = (Object.keys(tally) as Gene[]).filter((g) => Math.abs((tally[g] ?? 0) - best) < 1e-9);
    if (!(best > weight[own] + 1e-9)) return { gene: own, tie: null, changed: false, tally };
    if (leaders.length === 1) return { gene: leaders[0], tie: null, changed: leaders[0] !== own, tally };
    return { gene: leaders[0], tie: leaders, changed: !leaders.every((g) => g === own), tally };
  });
}

/** Neighbour cells of a planter cell: any other cell within 1.5 m (diagonals included in a 3×3 grid). */
export function neighbourCells(index: number, cols: number, cells: number): number[] {
  const r = Math.floor(index / cols);
  const c = index % cols;
  const out: number[] = [];
  for (let i = 0; i < cells; i++) {
    if (i === index) continue;
    const dr = Math.abs(Math.floor(i / cols) - r);
    const dc = Math.abs((i % cols) - c);
    if (dr <= 1 && dc <= 1) out.push(i);
  }
  return out;
}

// ---------- Growth and harvest ----------

export interface GrowthInput {
  crop: Crop;
  genes: Genes;
  /** Overall growing condition, 0–1, where 1 means every factor is at the crop's optimum. */
  quality: number;
}

/** Real minutes from planting to ripe. */
export function minutesToRipe(
  { crop, genes, quality }: GrowthInput,
  early: { seed: number; seedling: number; sapling: number },
): number {
  const speed = quality * (1 + 0.25 * count(genes, 'G'));
  if (speed <= 0) return Infinity;
  const scaled = early.seed + early.seedling + early.sapling + crop.mature + crop.fruiting;
  return scaled / speed + crop.crossbreed;
}

/** Items from harvesting one ripe plant. */
export function harvestAmount({ crop, genes, quality }: GrowthInput): number {
  const f = Math.min(1, quality * (1 + 0.25 * count(genes, 'G')));
  return Math.round((1 + crop.fruitingYield * f * (1 + 0.25 * count(genes, 'Y'))) * crop.multiplier);
}

/** Clones from one plant. */
export function cloneCount(crop: Crop, genes: Genes): number {
  return crop.clones + Math.floor(count(genes, 'Y') / 2);
}

/** Water one plant draws per real minute. */
export function waterPerMinute(crop: Crop, genes: Genes): number {
  return crop.water * (1 + 0.1 * count(genes, 'W'));
}

/** Overall quality from planter ground alone (the factor fertilizer fixes). */
export function groundQuality(
  crop: Crop,
  fertilized: boolean,
  ground: { planter: number; fertilized: number },
): number {
  return Math.min(1, (fertilized ? ground.fertilized : ground.planter) / crop.optimal);
}

// ---------- Farm sizing ----------

export interface FarmInput extends GrowthInput {
  /** Items wanted per real hour. */
  target: number;
  slotsPerPlanter: number;
  /** Keep the genes by replanting clones: some plants are cloned, not harvested. */
  replantClones: boolean;
}

export interface FarmPlan {
  cycleMinutes: number;
  perPlant: number;
  clones: number;
  /** Share of plants harvested each cycle (the rest are cloned to replant). */
  harvestedShare: number;
  /** Items per hour from one planted slot. */
  perSlotPerHour: number;
  plants: number;
  planters: number;
  waterPerMinute: number;
}

export function planFarm(input: FarmInput, early: { seed: number; seedling: number; sapling: number }): FarmPlan {
  const cycleMinutes = minutesToRipe(input, early);
  const perPlant = harvestAmount(input);
  const clones = cloneCount(input.crop, input.genes);
  const harvestedShare = input.replantClones ? Math.max(0, 1 - 1 / clones) : 1;
  const perSlotPerHour = Number.isFinite(cycleMinutes) ? (perPlant * harvestedShare * 60) / cycleMinutes : 0;
  const plants = perSlotPerHour > 0 ? Math.ceil(input.target / perSlotPerHour) : 0;
  const planters = Math.ceil(plants / input.slotsPerPlanter);
  return {
    cycleMinutes,
    perPlant,
    clones,
    harvestedShare,
    perSlotPerHour,
    plants,
    planters,
    waterPerMinute: plants * waterPerMinute(input.crop, input.genes),
  };
}
