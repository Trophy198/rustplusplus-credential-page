// Sanity checks for farm/calc.ts (run with `npm test`).
import assert from 'node:assert/strict';
import {
  cloneCount,
  crossbreed,
  groundQuality,
  harvestAmount,
  minutesToRipe,
  neighbourCells,
  planFarm,
  waterPerMinute,
} from './calc.ts';
import { CROPS, EARLY_STAGES, GENE_WEIGHT, GROUND } from './constants.ts';

const g = (s) => s.split('');
const hemp = CROPS.find((c) => c.id === 'hemp');

// --- crossbreeding (examples from the code's rules) ---
// One G neighbour (0.6) never beats a G centre (0.6).
let r = crossbreed(g('GGGGGG'), [g('YYYYYY')], GENE_WEIGHT);
assert.ok(r.every((s) => !s.changed));
// Two G (1.2) beat a red centre gene (W 1.0).
r = crossbreed(g('WWWWWW'), [g('GGGGGG'), g('GGGGGG')], GENE_WEIGHT);
assert.ok(r.every((s) => s.gene === 'G' && s.changed && !s.tie));
// One W (1.0) beats a green centre (0.6).
r = crossbreed(g('GGGGGG'), [g('WWWWWW')], GENE_WEIGHT);
assert.ok(r.every((s) => s.gene === 'W'));
// The centre's own gene is not added: centre G with one G and one W neighbour becomes W.
r = crossbreed(g('GGGGGG'), [g('GGGGGG'), g('WWWWWW')], GENE_WEIGHT);
assert.ok(r.every((s) => s.gene === 'W'));
// Tie: two G (1.2) vs two Y (1.2) on an X centre -> one of G/Y.
r = crossbreed(g('XXXXXX'), [g('GGGGGG'), g('GGGGGG'), g('YYYYYY'), g('YYYYYY')], GENE_WEIGHT);
assert.deepEqual([...r[0].tie].sort(), ['G', 'Y']);
// Equal to the bar is not enough: one X (1.0) vs W centre (1.0) keeps W.
r = crossbreed(g('WWWWWW'), [g('XXXXXX')], GENE_WEIGHT);
assert.ok(r.every((s) => s.gene === 'W' && !s.changed));
// Per slot independence.
r = crossbreed(g('GYGYGY'), [g('WWWYYY'), g('WWWYYY')], GENE_WEIGHT);
assert.equal(r.map((s) => s.gene).join(''), 'WWWYYY');

// Grid neighbours in a 3x3 planter: centre 8, corner 3, edge 5.
assert.equal(neighbourCells(4, 3, 9).length, 8);
assert.equal(neighbourCells(0, 3, 9).length, 3);
assert.equal(neighbourCells(1, 3, 9).length, 5);

// --- growth and harvest ---
// Hemp, perfect conditions: Y0 40 cloth, Y6 85 cloth.
assert.equal(harvestAmount({ crop: hemp, genes: g('XXXXXX'), quality: 1 }), 40);
assert.equal(harvestAmount({ crop: hemp, genes: g('YYYYYY'), quality: 1 }), 85);
// GGGYYY: 3 G -> speed 1.75; 111 scaled minutes / 1.75 + 1 fixed.
assert.ok(
  Math.abs(minutesToRipe({ crop: hemp, genes: g('GGGYYY'), quality: 1 }, EARLY_STAGES) - (111 / 1.75 + 1)) < 1e-9,
);
assert.equal(harvestAmount({ crop: hemp, genes: g('GGGYYY'), quality: 1 }), Math.round((1 + 3 * 1.75) * 10)); // 63
// Unfertilized planter caps hemp quality at 0.6/0.9.
assert.ok(Math.abs(groundQuality(hemp, false, GROUND) - 0.6 / 0.9) < 1e-9);
assert.equal(groundQuality(hemp, true, GROUND), 1);
// Clones: 2 + floor(Y/2); water: +10% per W.
assert.equal(cloneCount(hemp, g('GGGYYY')), 3);
assert.ok(Math.abs(waterPerMinute(hemp, g('WWGGYY')) - 6) < 1e-9);

// --- farm plan ---
const plan = planFarm(
  { crop: hemp, genes: g('GGGYYY'), quality: 1, target: 1000, slotsPerPlanter: 9, replantClones: true },
  EARLY_STAGES,
);
// 63 cloth per plant, 2/3 harvested (3 clones), cycle 64.43 min.
assert.equal(plan.perPlant, 63);
assert.ok(Math.abs(plan.harvestedShare - 2 / 3) < 1e-9);
const perSlot = (63 * (2 / 3) * 60) / (111 / 1.75 + 1);
assert.ok(Math.abs(plan.perSlotPerHour - perSlot) < 1e-9);
assert.equal(plan.plants, Math.ceil(1000 / perSlot));
assert.equal(plan.planters, Math.ceil(plan.plants / 9));
assert.equal(plan.waterPerMinute, plan.plants * 5);

console.log('farm ok');
