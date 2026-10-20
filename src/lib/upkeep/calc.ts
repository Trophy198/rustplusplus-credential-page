/**
 * Pure Tool Cupboard upkeep maths.
 *
 * Upkeep per period = build cost × blended bracket fraction, where the
 * fraction is the average of the bracket rates over all building blocks.
 * Doors and other non-block entities pay the same rate without counting as
 * blocks (High External Walls pay a fixed rate). The game keeps fractional
 * upkeep and only takes whole units from the TC, so nothing is rounded here.
 */
import type { Deployable, Grade, Resource, Shape } from './constants';

export type Amounts = Record<Resource, number>;

/** Game data the maths needs; pass the tables from ./constants. */
export interface UpkeepData {
  shapes: readonly Shape[];
  grades: readonly { id: Grade; resource: Resource; fullCost: number }[];
  deployables: readonly Deployable[];
  brackets: readonly { blocks: number; fraction: number }[];
  resources: readonly { id: Resource; stack: number }[];
}

const RESOURCE_IDS: readonly Resource[] = ['wood', 'stone', 'metal', 'hqm'];

export const zero = (): Amounts => ({ wood: 0, stone: 0, metal: 0, hqm: 0 });

/** One line of the base: `count` pieces of a shape in a grade. */
export interface BlockLine {
  shape: string;
  grade: Grade;
  count: number;
}

/** Average bracket fraction for a base with `blocks` blocks. */
export function blendedFraction(blocks: number, brackets: UpkeepData['brackets']): number {
  if (blocks <= 0) return 0;
  let remaining = blocks;
  let total = 0;
  for (const b of brackets) {
    const n = Math.min(remaining, b.blocks);
    total += n * b.fraction;
    remaining -= n;
    if (remaining <= 0) break;
  }
  return total / blocks;
}

export interface BaseEstimate {
  blocks: number;
  buildCost: Amounts;
  fraction: number;
  /** Upkeep per period (24 h by default), unrounded, including the group tax. */
  upkeep: Amounts;
  /** Extra share from the group tax (0.04 = +4%). */
  tax: number;
}

export function estimateBase(
  lines: readonly BlockLine[],
  deployables: Record<string, number>,
  data: UpkeepData,
  tax = 0,
): BaseEstimate {
  const buildCost = zero();
  const atBlendedRate = zero(); // cost of everything that pays the building's blended rate
  const fixed = zero(); // upkeep from fixed-rate entities (High External Walls)
  let blocks = 0;
  for (const l of lines) {
    const shape = data.shapes.find((s) => s.id === l.shape);
    const grade = data.grades.find((g) => g.id === l.grade);
    if (!shape || !grade || l.count <= 0) continue;
    const cost = Math.ceil(grade.fullCost * shape.factor) * l.count;
    buildCost[grade.resource] += cost;
    atBlendedRate[grade.resource] += cost;
    blocks += l.count;
  }
  // Doors and other entities pay upkeep but don't count as blocks.
  for (const d of data.deployables) {
    const n = deployables[d.id] ?? 0;
    if (n <= 0) continue;
    for (const [r, c] of Object.entries(d.cost) as [Resource, number][]) {
      buildCost[r] += c * n;
      if (d.fixedRate === undefined) atBlendedRate[r] += c * n;
      else fixed[r] += c * n * d.fixedRate;
    }
  }
  const fraction = blendedFraction(blocks, data.brackets);
  const upkeep = zero();
  for (const r of RESOURCE_IDS) upkeep[r] = (atBlendedRate[r] * fraction + fixed[r]) * (1 + tax);
  return { blocks, buildCost, fraction, upkeep, tax };
}

export interface Protection {
  /** Hours each resource lasts on its own; Infinity when not consumed. */
  hoursByResource: Amounts;
  /** Hours until the first consumed resource runs out (when decay starts somewhere). */
  hours: number;
  limiting: Resource | null;
}

export function protection(stock: Amounts, upkeep: Amounts, periodHours = 24): Protection {
  const hoursByResource = zero();
  let hours = Infinity;
  let limiting: Resource | null = null;
  for (const r of RESOURCE_IDS) {
    const daily = upkeep[r];
    const h = daily > 0 ? (stock[r] / daily) * periodHours : Infinity;
    hoursByResource[r] = h;
    if (h < hours) {
      hours = h;
      limiting = r;
    }
  }
  return { hoursByResource, hours, limiting };
}

/** Slots needed to hold `amounts` in a TC. */
export function slotsFor(amounts: Amounts, resources: UpkeepData['resources']): number {
  return resources.reduce((n, r) => n + Math.ceil(amounts[r.id] / r.stack), 0);
}

/** Resources needed for `days` of protection. */
export function fillFor(upkeep: Amounts, days: number): Amounts {
  const out = zero();
  for (const r of RESOURCE_IDS) out[r] = Math.ceil(upkeep[r] * days);
  return out;
}

/**
 * Longest protection (in hours, to the nearest hour) that fits in `slots`
 * TC slots, and the fill that achieves it.
 */
export function maxFill(
  upkeep: Amounts,
  slots: number,
  resources: UpkeepData['resources'],
): { hours: number; fill: Amounts } {
  if (RESOURCE_IDS.every((r) => upkeep[r] <= 0)) return { hours: Infinity, fill: zero() };
  const fits = (h: number) => slotsFor(fillFor(upkeep, h / 24), resources) <= slots;
  let lo = 0;
  let hi = 1;
  while (fits(hi) && hi < 1e6) hi *= 2;
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2);
    if (fits(mid)) lo = mid;
    else hi = mid;
  }
  return { hours: lo, fill: fillFor(upkeep, lo / 24) };
}
