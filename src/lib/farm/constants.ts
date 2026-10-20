/**
 * Rust farming constants.
 *
 * Checked 2026-10-20. Mechanics from decompiled server code (GrowableEntity,
 * GrowableGenetics, PlanterBox, Sprinkler, WaterPump; 2024 release branch,
 * the newest public decompile). Crop, planter and device values from game-asset
 * data extracted from client build 25797961 (2026-10-09). Patch notes for
 * 2025–2026 changes (Ripe stage 24 h since 2026-04-02; triangle planter, wheat
 * and flowers since 2025-03-06).
 */
export const AS_OF = '2026-10';

export type Gene = 'G' | 'Y' | 'H' | 'W' | 'X';

/** Crossbreeding weight of each gene. */
export const GENE_WEIGHT: Record<Gene, number> = { G: 0.6, Y: 0.6, H: 0.6, W: 1, X: 1 };

/** Per gene: G speeds growth 25%, Y adds 25% yield, W adds 10% water use. */
export const GENE_EFFECT = { growth: 0.25, yield: 0.25, water: 0.1 };

/** Stages every crop shares, real minutes; these scale with conditions and G. */
export const EARLY_STAGES = { seed: 1, seedling: 10, sapling: 10 };

export interface Crop {
  id: string;
  name: string;
  /** Item harvested. */
  item: string;
  /** Crossbreed stage, real minutes; fixed. */
  crossbreed: number;
  /** Mature and Fruiting stages, real minutes; scale with conditions and G. */
  mature: number;
  fruiting: number;
  /** Yield built up during Fruiting at full quality, before the multiplier. */
  fruitingYield: number;
  /** Items per point of yield. */
  multiplier: number;
  /** Clones from one plant with no Y genes. */
  clones: number;
  /** Water drawn per real minute (one plant tick). */
  water: number;
  /** Condition level that counts as perfect (0–1). */
  optimal: number;
}

export const CROPS: readonly Crop[] = [
  {
    id: 'hemp',
    name: 'Hemp',
    item: 'cloth',
    crossbreed: 1,
    mature: 60,
    fruiting: 30,
    fruitingYield: 3,
    multiplier: 10,
    clones: 2,
    water: 5,
    optimal: 0.9,
  },
  {
    id: 'corn',
    name: 'Corn',
    item: 'corn',
    crossbreed: 1,
    mature: 30,
    fruiting: 30,
    fruitingYield: 2,
    multiplier: 2,
    clones: 2,
    water: 4,
    optimal: 0.9,
  },
  {
    id: 'potato',
    name: 'Potato',
    item: 'potatoes',
    crossbreed: 1,
    mature: 45,
    fruiting: 30,
    fruitingYield: 4,
    multiplier: 2,
    clones: 2,
    water: 4,
    optimal: 0.7,
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    item: 'pumpkins',
    crossbreed: 1,
    mature: 30,
    fruiting: 30,
    fruitingYield: 2,
    multiplier: 1,
    clones: 2,
    water: 5,
    optimal: 0.9,
  },
  {
    id: 'wheat',
    name: 'Wheat',
    item: 'wheat',
    crossbreed: 1,
    mature: 30,
    fruiting: 30,
    fruitingYield: 2,
    multiplier: 2,
    clones: 2,
    water: 4,
    optimal: 0.9,
  },
  {
    id: 'berry',
    name: 'Berries (any colour)',
    item: 'berries',
    crossbreed: 5,
    mature: 45,
    fruiting: 30,
    fruitingYield: 2,
    multiplier: 1,
    clones: 2,
    water: 4,
    optimal: 0.8,
  },
  {
    id: 'rose',
    name: 'Rose / Sunflower',
    item: 'flowers',
    crossbreed: 1,
    mature: 60,
    fruiting: 30,
    fruitingYield: 3,
    multiplier: 10,
    clones: 2,
    water: 5,
    optimal: 0.9,
  },
  {
    id: 'orchid',
    name: 'Orchid',
    item: 'flowers',
    crossbreed: 1,
    mature: 60,
    fruiting: 30,
    fruitingYield: 3,
    multiplier: 10,
    clones: 1,
    water: 20,
    optimal: 0.9,
  },
];

export interface Planter {
  id: string;
  name: string;
  slots: number;
  water: number;
}

export const PLANTERS: readonly Planter[] = [
  { id: 'large', name: 'Large Planter', slots: 9, water: 9000 },
  { id: 'small', name: 'Small Planter', slots: 3, water: 3000 },
  { id: 'triangle', name: 'Triangle Planter', slots: 4, water: 3000 },
];

/** Planter ground quality without and with fertilizer (one per plant). */
export const GROUND = { planter: 0.6, fertilized: 1 };

export const SPRINKLER = {
  /** Water a sprinkler splashes per minute, shared by planters within its radius. */
  deliverPerMin: 180,
  /** Water it pulls from its source per minute while running. */
  drawPerMin: 120,
  radius: 3,
};

export const WATER_PUMP = { perMin: 510, rw: 5 };

export const CEILING_LIGHT = {
  rw: 2,
  /**
   * Large planters one light can cover: the light counts within a 3 m sphere
   * centred 3 m above each planter, so a light where four planters meet
   * (~2.1 m from each centre) covers all four. Calculated, not tested in game.
   */
  plantersPerLight: 4,
};
