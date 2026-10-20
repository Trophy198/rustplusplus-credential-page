/**
 * Rust Tool Cupboard upkeep constants.
 *
 * Checked 2026-10-20. Block costs: game-file data (bobosneefdev/rust-items-json,
 * build 25824447, 2026-10-10), matching the rustlabs upkeep ranges in the
 * rustplusplus static data: a full block is 50 twig wood / 200 wood / 300 stone /
 * 200 metal fragments / 25 HQM; doorways and windows 70%, floor-class pieces
 * 50%, triangle floors 25%, rounded up (armored triangle floor = 7 HQM).
 * Mechanics: decompiled BuildingPrivlidge/DecayEntity and the 2026 convar
 * defaults (decay.bracket_*), Facepunch news for 2026 changes (high walls
 * 2026-08-06, group tax 2026-09-03).
 */
export const AS_OF = '2026-10';

export type Resource = 'wood' | 'stone' | 'metal' | 'hqm';

export const RESOURCES: readonly { id: Resource; name: string; stack: number }[] = [
  { id: 'wood', name: 'Wood', stack: 1000 },
  { id: 'stone', name: 'Stones', stack: 1000 },
  { id: 'metal', name: 'Metal Fragments', stack: 1000 },
  { id: 'hqm', name: 'High Quality Metal', stack: 100 },
];

export type Grade = 'twig' | 'wood' | 'stone' | 'metal' | 'armored';

export const GRADES: readonly { id: Grade; name: string; resource: Resource; fullCost: number }[] = [
  { id: 'twig', name: 'Twig', resource: 'wood', fullCost: 50 },
  { id: 'wood', name: 'Wood', resource: 'wood', fullCost: 200 },
  { id: 'stone', name: 'Stone', resource: 'stone', fullCost: 300 },
  { id: 'metal', name: 'Sheet Metal', resource: 'metal', fullCost: 200 },
  { id: 'armored', name: 'Armored', resource: 'hqm', fullCost: 25 },
];

export interface Shape {
  id: string;
  name: string;
  /** Share of a full block's cost (rounded up per piece). */
  factor: number;
}

export const SHAPES: readonly Shape[] = [
  { id: 'foundation', name: 'Foundation', factor: 1 },
  { id: 'trifoundation', name: 'Triangle Foundation', factor: 0.5 },
  { id: 'wall', name: 'Wall / Half Wall', factor: 1 },
  { id: 'doorway', name: 'Doorway / Window', factor: 0.7 },
  { id: 'lowwall', name: 'Low Wall / Wall Frame', factor: 0.5 },
  { id: 'floor', name: 'Floor / Floor Frame', factor: 0.5 },
  { id: 'trifloor', name: 'Triangle Floor', factor: 0.25 },
  { id: 'stairs', name: 'Stairs (U, L, Spiral)', factor: 1 },
  { id: 'roof', name: 'Roof / Ramp / Steps', factor: 0.5 },
];

/**
 * Non-block entities that pay upkeep, with the resource part of their crafting
 * cost. They pay the building's blended rate but don't count as blocks;
 * `fixedRate` overrides the rate (High External Walls and Gates: 20% since the
 * August 2026 update; a 4,000-material recipe now makes 3 walls).
 */
export interface Deployable {
  id: string;
  name: string;
  cost: Partial<Record<Resource, number>>;
  fixedRate?: number;
}

export const DEPLOYABLES: readonly Deployable[] = [
  { id: 'wooddoor', name: 'Wooden Door', cost: { wood: 300 } },
  { id: 'wooddouble', name: 'Wood Double Door', cost: { wood: 350 } },
  { id: 'metaldoor', name: 'Sheet Metal Door', cost: { metal: 150 } },
  { id: 'metaldouble', name: 'Sheet Metal Double Door', cost: { metal: 200 } },
  { id: 'garage', name: 'Garage Door', cost: { metal: 300 } },
  { id: 'armoreddoor', name: 'Armored Door', cost: { hqm: 20 } },
  { id: 'armoreddouble', name: 'Armored Double Door', cost: { hqm: 25 } },
  { id: 'ladderhatch', name: 'Ladder Hatch', cost: { metal: 300 } },
  { id: 'armoredhatch', name: 'Armored Ladder Hatch', cost: { hqm: 35 } },
  { id: 'shopfront', name: 'Metal Shop Front', cost: { metal: 250 } },
  { id: 'embrasure', name: 'Metal Embrasure', cost: { metal: 100 } },
  { id: 'windowbars', name: 'Metal Window Bars', cost: { metal: 25 } },
  { id: 'glasswindow', name: 'Strengthened Glass Window', cost: { metal: 50 } },
  { id: 'hwstone', name: 'High External Stone Wall', cost: { stone: 4000 / 3 }, fixedRate: 0.2 },
  { id: 'hwwood', name: 'High External Wooden Wall', cost: { wood: 4000 / 3 }, fixedRate: 0.2 },
  { id: 'hgstone', name: 'High External Stone Gate', cost: { stone: 3000 }, fixedRate: 0.2 },
  { id: 'hgwood', name: 'High External Wooden Gate', cost: { wood: 3000 }, fixedRate: 0.2 },
];

/**
 * Upkeep brackets (decay.bracket_N_blockcount / _costfraction defaults). The
 * counts are widths: blocks 1–15 at 10%, 16–65 at 15%, 66–190 at 20%, 191+ at
 * 33.3%. The building pays one blended rate: Σ(width × fraction) ÷ blocks.
 */
export const BRACKETS: readonly { blocks: number; fraction: number }[] = [
  { blocks: 15, fraction: 0.1 },
  { blocks: 50, fraction: 0.15 },
  { blocks: 125, fraction: 0.2 },
  { blocks: Infinity, fraction: 0.333 },
];

/**
 * Group upkeep tax (2026-09-03): extra upkeep by players authorised on the TC
 * or code locks. Players 1–4 add nothing, 5–10 add 2% each, 11+ add 4% each,
 * capped at +300%.
 */
export function groupTax(players: number): number {
  const p = Math.max(0, Math.floor(players));
  const tax = Math.max(0, Math.min(p, 10) - 4) * 0.02 + Math.max(0, p - 10) * 0.04;
  return Math.min(3, tax);
}

/** Upkeep period in real minutes (decay.upkeep_period_minutes default). */
export const UPKEEP_PERIOD_MINUTES = 1440;

/** Tool Cupboard slots that hold upkeep resources. */
export const TC_SLOTS = 24;
