/**
 * Rust electricity constants for the power planner.
 *
 * No official machine-readable source exists, so every value is hand-curated.
 * Checked 2026-10-20 against rusthelp.com item pages (data verified 2026-10-01,
 * after the August 2026 Power Trip update), rustrician.io's handbook, Facepunch's
 * wiki and corrosionhour. `verify` marks values where sources disagree or a
 * detail changes the draw; the UI shows them as approximate. Sprinklers draw no
 * power (water only) and are deliberately absent. Update AS_OF after re-checking.
 */
import type { Assumptions } from './calc';

export const AS_OF = '2026-10';

export type Category = 'defense' | 'lighting' | 'farming' | 'base' | 'sensors';

export const CATEGORY_LABELS: Record<Category, string> = {
  defense: 'Defense',
  lighting: 'Lighting',
  farming: 'Farming and water',
  base: 'Base and utility',
  sensors: 'Sensors, alarms and smart devices',
};

export interface Consumer {
  id: string;
  name: string;
  category: Category;
  /** Power drawn while running, rW. */
  rw: number;
  /** Shown next to the value when sources disagree. */
  verify?: string;
}

export const CONSUMERS: readonly Consumer[] = [
  {
    id: 'turret',
    name: 'Auto Turret',
    category: 'defense',
    rw: 10,
    verify: '11 rW if you also use its target or ammo outputs.',
  },
  { id: 'sam', name: 'SAM Site', category: 'defense', rw: 25 },
  {
    id: 'tesla',
    name: 'Tesla Coil',
    category: 'defense',
    rw: 25,
    verify: 'Draws up to 25 rW, more power means more damage. Facepunch’s wiki lists 35.',
  },
  { id: 'igniter', name: 'Igniter', category: 'defense', rw: 2 },
  { id: 'searchlight', name: 'Search Light', category: 'lighting', rw: 10 },
  { id: 'ceiling', name: 'Ceiling Light', category: 'lighting', rw: 2 },
  { id: 'spotlight', name: 'Spot Light / Tripod Spot Light', category: 'lighting', rw: 5 },
  { id: 'fairylights', name: 'Fairy Lights', category: 'lighting', rw: 5 },
  { id: 'chandelier', name: 'Chandelier', category: 'lighting', rw: 4 },
  { id: 'fluorescent', name: 'Fluorescent Light / Table Lamp', category: 'lighting', rw: 1 },
  { id: 'flasher', name: 'Flasher / Siren Light', category: 'lighting', rw: 1 },
  { id: 'neonsmall', name: 'Small Neon Sign', category: 'lighting', rw: 2 },
  { id: 'neonmedium', name: 'Medium Neon Sign', category: 'lighting', rw: 4 },
  { id: 'neonlarge', name: 'Large Neon Sign', category: 'lighting', rw: 6 },
  { id: 'pump', name: 'Water Pump', category: 'farming', rw: 5 },
  { id: 'purifier', name: 'Powered Water Purifier', category: 'farming', rw: 5 },
  { id: 'fridge', name: 'Fridge', category: 'base', rw: 5 },
  { id: 'minifridge', name: 'Minifridge', category: 'base', rw: 2 },
  { id: 'efurnace', name: 'Electric Furnace (incl. Industrial)', category: 'base', rw: 3 },
  { id: 'heater', name: 'Electric Heater', category: 'base', rw: 3 },
  { id: 'elevator', name: 'Elevator (any number of floors)', category: 'base', rw: 5 },
  { id: 'carlift', name: 'Modular Car Lift', category: 'base', rw: 5 },
  { id: 'hopper', name: 'Hopper', category: 'base', rw: 8 },
  {
    id: 'conveyor',
    name: 'Industrial Conveyor',
    category: 'base',
    rw: 1,
    verify: '2 rW when its filter outputs are used.',
  },
  { id: 'crafter', name: 'Industrial Crafter', category: 'base', rw: 1 },
  { id: 'adaptor', name: 'Storage Adaptor', category: 'base', rw: 1 },
  { id: 'boombox', name: 'Boom Box', category: 'base', rw: 10 },
  { id: 'cctv', name: 'CCTV / PTZ Camera', category: 'sensors', rw: 3, verify: 'Older guides list 5 rW.' },
  { id: 'storagemonitor', name: 'Storage Monitor', category: 'sensors', rw: 1 },
  { id: 'smartalarm', name: 'Smart Alarm', category: 'sensors', rw: 1 },
  { id: 'doorcontroller', name: 'Door Controller', category: 'sensors', rw: 1 },
  { id: 'audioalarm', name: 'Audio Alarm', category: 'sensors', rw: 1 },
  { id: 'hbhf', name: 'HBHF Sensor', category: 'sensors', rw: 1 },
  { id: 'laser', name: 'Laser Detector', category: 'sensors', rw: 1 },
  { id: 'seismic', name: 'Seismic Sensor', category: 'sensors', rw: 1 },
  { id: 'rf', name: 'RF Broadcaster / Receiver', category: 'sensors', rw: 1 },
  { id: 'telephone', name: 'Telephone', category: 'sensors', rw: 1 },
];

export interface Battery {
  id: string;
  name: string;
  /** Stored energy, rWm (rW for one real minute). */
  capacity: number;
  maxOutput: number;
}

export const BATTERIES: readonly Battery[] = [
  { id: 'small', name: 'Small Battery', capacity: 400, maxOutput: 15 },
  { id: 'medium', name: 'Medium Battery', capacity: 9000, maxOutput: 50 },
  { id: 'large', name: 'Large Battery', capacity: 24000, maxOutput: 100 },
];

export const GENERATION = {
  /** Large Solar Panel output at full sun facing it, rW. */
  solarPeak: 20,
  /** Small Generator output, rW. */
  generatorRw: 40,
  /** Low Grade Fuel burned per hour by one Small Generator. */
  generatorLgfPerHour: 250,
};

export const DEFAULT_ASSUMPTIONS: Assumptions = {
  efficiency: 0.8,
  cycleMinutes: 60,
  // rustrician measured an east/west pair at ~940–1,075 rWm per day; one panel ≈ 480.
  solarMinutes: 30,
  solarRwmPerCycle: 480,
  // ~60 rW from 6+ floors up, ~80 from 9+ (rustrician); lower near the ground.
  windRw: 60,
};
