/**
 * Rust Tool Cupboard upkeep constants.
 *
 * Block build costs are derived from rustlabs upkeep ranges (10% and 33.3% of
 * build cost per block) in the rustplusplus static data (2026-03), which match
 * the well-known costs: a full block is 200 wood / 300 stone / 200 metal
 * fragments / 25 HQM; doorways and windows 70%; floors, frames, low walls,
 * roofs, ramps, steps and triangle foundations 50%; triangle floors 25%.
 */
export const AS_OF = '2026-10';

export type Resource = 'wood' | 'stone' | 'metal' | 'hqm';

export const RESOURCES: readonly { id: Resource; name: string; stack: number }[] = [
  { id: 'wood', name: 'Wood', stack: 1000 },
  { id: 'stone', name: 'Stones', stack: 1000 },
  { id: 'metal', name: 'Metal Fragments', stack: 1000 },
  { id: 'hqm', name: 'High Quality Metal', stack: 100 },
];

export type Grade = 'wood' | 'stone' | 'metal' | 'armored';

export const GRADES: readonly { id: Grade; name: string; resource: Resource; fullCost: number }[] = [
  { id: 'wood', name: 'Wood', resource: 'wood', fullCost: 200 },
  { id: 'stone', name: 'Stone', resource: 'stone', fullCost: 300 },
  { id: 'metal', name: 'Sheet Metal', resource: 'metal', fullCost: 200 },
  { id: 'armored', name: 'Armored', resource: 'hqm', fullCost: 25 },
];

export interface Shape {
  id: string;
  name: string;
  /** Share of a full block's cost. */
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

/** Deployables that pay upkeep, with their build cost. */
export interface Deployable {
  id: string;
  name: string;
  cost: Partial<Record<Resource, number>>;
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
  { id: 'shopfront', name: 'Metal Shop Front', cost: { metal: 250 } },
  { id: 'embrasure', name: 'Metal Embrasure', cost: { metal: 100 } },
  { id: 'windowbars', name: 'Metal Window Bars', cost: { metal: 25 } },
  { id: 'glasswindow', name: 'Strengthened Glass Window', cost: { metal: 50 } },
];

/**
 * Upkeep brackets: the first 15 blocks are charged 10% of their cost per
 * period, the next 50 15%, the next 125 20%, everything beyond 33.3%.
 */
export const BRACKETS: readonly { blocks: number; fraction: number }[] = [
  { blocks: 15, fraction: 0.1 },
  { blocks: 50, fraction: 0.15 },
  { blocks: 125, fraction: 0.2 },
  { blocks: Infinity, fraction: 1 / 3 },
];

/** Upkeep period in real minutes (decay.upkeep_period_minutes default). */
export const UPKEEP_PERIOD_MINUTES = 1440;

/** Tool Cupboard slots that hold upkeep resources. */
export const TC_SLOTS = 24;
