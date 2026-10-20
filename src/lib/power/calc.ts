/**
 * Pure power-planning maths for the Rust electricity planner.
 *
 * Model (deliberately conservative): every source charges the batteries and
 * every consumer runs from the batteries, so all energy passes through the
 * charging loss once. A battery gains `input × efficiency` rWm per real minute
 * and loses whatever downstream draws. Max charge rates per battery are not
 * modelled: no first-party source gives them.
 */
import type { Battery, Consumer } from './constants';

export interface Assumptions {
  /** Fraction of input power stored while charging (0–1). */
  efficiency: number;
  /** Real minutes in one full day/night cycle. */
  cycleMinutes: number;
  /** Real minutes per cycle during which solar panels produce anything. */
  solarMinutes: number;
  /** Energy one Large Solar Panel produces over a full cycle, rWm. */
  solarRwmPerCycle: number;
  /** Average output of one wind turbine in rW (depends heavily on height and placement). */
  windRw: number;
}

export interface Sources {
  solar: number;
  wind: number;
  generators: number;
}

export interface Plan {
  consumers: Record<string, number>;
  batteries: Record<string, number>;
  sources: Sources;
}

export interface Result {
  load: number;
  capacity: number;
  maxOutput: number;
  /** Minutes a full bank runs the load with no input. Infinity when load is 0. */
  runtimeMinutes: number;
  /** Average input (before charging loss) over a full cycle, rW. */
  averageInput: number;
  /** Steady input while the sun is down (wind + generators), rW. */
  nightInput: number;
  /** rWm gained (or lost, if negative) over one full cycle after charging loss. */
  cycleBalance: number;
  /** Battery capacity needed to carry the load through the dark part of the cycle. */
  nightReserveNeeded: number;
  /** Input needed to keep the bank charge-neutral under this load, rW. */
  inputForNeutral: number;
  panelsNeeded: number;
  turbinesNeeded: number;
  generatorsNeeded: number;
  lgfPerHour: number;
  /** Minutes until the bank is empty starting full, given the sources; Infinity if it never empties. */
  minutesUntilEmpty: number;
  warnings: string[];
}

const sum = <T>(items: Record<string, number>, table: readonly T[], key: (t: T) => string, value: (t: T) => number) =>
  table.reduce((acc, t) => acc + (items[key(t)] ?? 0) * value(t), 0);

export function totalLoad(consumers: Record<string, number>, table: readonly Consumer[]): number {
  return sum(
    consumers,
    table,
    (c) => c.id,
    (c) => c.rw,
  );
}

export function calculate(
  plan: Plan,
  consumers: readonly Consumer[],
  batteries: readonly Battery[],
  generation: { generatorRw: number; generatorLgfPerHour: number },
  a: Assumptions,
): Result {
  const load = totalLoad(plan.consumers, consumers);
  const capacity = sum(
    plan.batteries,
    batteries,
    (b) => b.id,
    (b) => b.capacity,
  );
  const maxOutput = sum(
    plan.batteries,
    batteries,
    (b) => b.id,
    (b) => b.maxOutput,
  );

  const { solar, wind, generators } = plan.sources;
  // Average panel output while the sun is up, spread over the producing window.
  const solarWhileUp = a.solarMinutes > 0 ? (solar * a.solarRwmPerCycle) / a.solarMinutes : 0;
  const steady = wind * a.windRw + generators * generation.generatorRw;
  const solarShare = a.cycleMinutes > 0 ? a.solarMinutes / a.cycleMinutes : 0;
  const averageInput = solarWhileUp * solarShare + steady;
  const nightMinutes = Math.max(0, a.cycleMinutes - a.solarMinutes);

  const dayNet = (solarWhileUp + steady) * a.efficiency - load;
  const nightNet = steady * a.efficiency - load;
  const cycleBalance = dayNet * a.solarMinutes + nightNet * nightMinutes;

  const nightReserveNeeded = Math.max(0, load - steady * a.efficiency) * nightMinutes;
  const inputForNeutral = a.efficiency > 0 ? load / a.efficiency : Infinity;

  // How many of one source alone would make a full cycle break even.
  const energyNeeded = inputForNeutral * a.cycleMinutes; // input-side rWm per cycle
  const panelsNeeded = load > 0 && a.solarRwmPerCycle > 0 ? Math.ceil(energyNeeded / a.solarRwmPerCycle) : 0;
  const turbinesNeeded = load > 0 && a.windRw > 0 ? Math.ceil(inputForNeutral / a.windRw) : 0;
  const generatorsNeeded = load > 0 ? Math.ceil(inputForNeutral / generation.generatorRw) : 0;

  const runtimeMinutes = load > 0 ? capacity / load : Infinity;
  const minutesUntilEmpty = untilEmpty(capacity, dayNet, nightNet, a.solarMinutes, nightMinutes, cycleBalance);

  const warnings: string[] = [];
  if (load > 0 && capacity === 0) warnings.push('no-battery');
  if (capacity > 0 && load > maxOutput) warnings.push('output-too-low');
  if (load > 0 && capacity > 0 && capacity < nightReserveNeeded && cycleBalance >= 0) warnings.push('night-short');

  return {
    load,
    capacity,
    maxOutput,
    runtimeMinutes,
    averageInput,
    nightInput: steady,
    cycleBalance,
    nightReserveNeeded,
    inputForNeutral,
    panelsNeeded,
    turbinesNeeded,
    generatorsNeeded,
    lgfPerHour: generators * generation.generatorLgfPerHour,
    minutesUntilEmpty,
    warnings,
  };
}

/**
 * Walk night/day phases from a full bank until it empties. Starts at
 * nightfall, the worst case: a full bank meets the dark first.
 */
function untilEmpty(
  capacity: number,
  dayNet: number,
  nightNet: number,
  dayMinutes: number,
  nightMinutes: number,
  cycleBalance: number,
): number {
  if (capacity <= 0) return 0;
  if (dayNet >= 0 && nightNet >= 0) return Infinity;
  let stored = capacity;
  let t = 0;
  for (let cycle = 0; cycle < 10_000; cycle++) {
    for (const [net, len] of [
      [nightNet, nightMinutes],
      [dayNet, dayMinutes],
    ] as const) {
      if (len <= 0) continue;
      if (net < 0 && stored + net * len <= 0) return t + stored / -net;
      stored = Math.min(capacity, stored + net * len);
      t += len;
    }
    // A bank that refills to full every cycle never empties.
    if (cycleBalance >= 0 && stored >= capacity) return Infinity;
  }
  return Infinity;
}
