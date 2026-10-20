// Quick sanity checks for calc.ts: `node --experimental-strip-types src/lib/power/calc.test.mjs`
import assert from 'node:assert/strict';
import { calculate } from './calc.ts';
import { BATTERIES, CONSUMERS, DEFAULT_ASSUMPTIONS, GENERATION } from './constants.ts';

const run = (consumers, batteries, sources, a = DEFAULT_ASSUMPTIONS) =>
  calculate({ consumers, batteries, sources }, CONSUMERS, BATTERIES, GENERATION, a);

// 4 turrets = 40 rW from one large battery (24,000 rWm): 600 min, output fine.
let r = run({ turret: 4 }, { large: 1 }, { solar: 0, wind: 0, generators: 0 });
assert.equal(r.load, 40);
assert.equal(r.runtimeMinutes, 600);
assert.equal(r.minutesUntilEmpty, 600);
assert.deepEqual(r.warnings, []);
assert.equal(r.inputForNeutral, 50);

// 12 turrets = 120 rW exceeds one large battery's 100 rW output.
r = run({ turret: 12 }, { large: 1 }, { solar: 0, wind: 0, generators: 0 });
assert.ok(r.warnings.includes('output-too-low'));

// Two generators (80 rW in, 64 stored/min) carry 40 rW forever and burn 500 LGF/h.
r = run({ turret: 4 }, { large: 1 }, { solar: 0, wind: 0, generators: 2 });
assert.equal(r.minutesUntilEmpty, Infinity);
assert.equal(r.lgfPerHour, 500);
assert.equal(r.generatorsNeeded, 2); // 50 rW needed / 40 each

// Solar only: panels needed so a 60-min cycle breaks even.
// 10 rW load -> 12.5 rW input -> 750 rWm per cycle; one panel gives 480 -> 2 panels.
r = run({ searchlight: 1 }, { medium: 1 }, { solar: 2, wind: 0, generators: 0 });
assert.equal(r.panelsNeeded, 2);
assert.ok(r.cycleBalance >= 0);
assert.equal(r.minutesUntilEmpty, Infinity);
// 30 dark minutes at 10 rW with no steady input: 300 rWm reserve.
assert.equal(r.nightReserveNeeded, 300);

// Too few panels: the bank drains over several cycles, finite time.
r = run({ searchlight: 1 }, { medium: 1 }, { solar: 1, wind: 0, generators: 0 });
assert.ok(r.cycleBalance < 0);
assert.ok(Number.isFinite(r.minutesUntilEmpty) && r.minutesUntilEmpty > 900);

// Night reserve warning: enough over a cycle, too little storage for the dark.
r = run({ searchlight: 2 }, { small: 1 }, { solar: 4, wind: 0, generators: 0 });
assert.ok(r.cycleBalance >= 0);
assert.ok(r.warnings.includes('night-short'));
assert.ok(Number.isFinite(r.minutesUntilEmpty)); // 400 rWm runs out during the first 30-min night at 20 rW

// No battery with a load.
r = run({ turret: 1 }, {}, { solar: 0, wind: 0, generators: 1 });
assert.ok(r.warnings.includes('no-battery'));

console.log('calc ok');
