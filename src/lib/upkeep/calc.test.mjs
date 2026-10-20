// Sanity checks for upkeep/calc.ts (run with `npm test`).
import assert from 'node:assert/strict';
import { blendedFraction, estimateBase, fillFor, maxFill, protection, slotsFor, zero } from './calc.ts';
import { BRACKETS, DEPLOYABLES, GRADES, RESOURCES, SHAPES, groupTax } from './constants.ts';

const data = { shapes: SHAPES, grades: GRADES, deployables: DEPLOYABLES, brackets: BRACKETS, resources: RESOURCES };

// Brackets: 20 blocks = (15×10% + 5×15%) / 20 = 11.25%.
assert.equal(blendedFraction(20, BRACKETS), 0.1125);
assert.equal(blendedFraction(15, BRACKETS), 0.1);
// 200 blocks: 15×.1 + 50×.15 + 125×.2 + 10×.333 = 1.5 + 7.5 + 25 + 3.33 = 37.33 / 200.
assert.ok(Math.abs(blendedFraction(200, BRACKETS) - 37.33 / 200) < 1e-9);

// 2x2 stone two-storey: 4 foundations, 15 walls, 1 doorway, 8 floors, 1 sheet metal door.
const base = estimateBase(
  [
    { shape: 'foundation', grade: 'stone', count: 4 },
    { shape: 'wall', grade: 'stone', count: 15 },
    { shape: 'doorway', grade: 'stone', count: 1 },
    { shape: 'floor', grade: 'stone', count: 8 },
  ],
  { metaldoor: 1 },
  data,
);
// The door pays upkeep but is not a block.
assert.equal(base.blocks, 28);
assert.equal(base.buildCost.stone, 4 * 300 + 15 * 300 + 210 + 8 * 150); // 7,110
assert.equal(base.buildCost.metal, 150);
// 28 blocks: (15×.1 + 13×.15) / 28 = 3.45 / 28, no rounding.
const f = 3.45 / 28;
assert.ok(Math.abs(base.fraction - f) < 1e-9);
assert.ok(Math.abs(base.upkeep.stone - 7110 * f) < 1e-9);
assert.ok(Math.abs(base.upkeep.metal - 150 * f) < 1e-9);

// Armored triangle floor rounds up to 7 HQM; twig is 50 wood a full piece.
const armored = estimateBase(
  [
    { shape: 'trifloor', grade: 'armored', count: 1 },
    { shape: 'wall', grade: 'twig', count: 1 },
  ],
  {},
  data,
);
assert.equal(armored.buildCost.hqm, 7);
assert.equal(armored.buildCost.wood, 50);

// High External Stone Wall: fixed 20% of 4000/3, not a block, not blended.
const hw = estimateBase([{ shape: 'foundation', grade: 'stone', count: 1 }], { hwstone: 3 }, data);
assert.equal(hw.blocks, 1);
assert.ok(Math.abs(hw.upkeep.stone - (300 * 0.1 + 3 * (4000 / 3) * 0.2)) < 1e-9); // 30 + 800

// Group tax: 6 players +4%, 12 players +20%, capped at +300%.
assert.ok(Math.abs(groupTax(4)) < 1e-12);
assert.ok(Math.abs(groupTax(6) - 0.04) < 1e-12);
assert.ok(Math.abs(groupTax(12) - 0.2) < 1e-12);
assert.equal(groupTax(1000), 3);
const taxed = estimateBase([{ shape: 'foundation', grade: 'stone', count: 10 }], {}, data, groupTax(12));
assert.ok(Math.abs(taxed.upkeep.stone - 3000 * 0.1 * 1.2) < 1e-9);

// Protection: 1,000 stone at 100/day lasts 240 h; wood unused.
const p = protection({ ...zero(), stone: 1000, metal: 100 }, { ...zero(), stone: 100, metal: 20 });
assert.equal(p.hoursByResource.stone, 240);
assert.equal(p.hoursByResource.metal, 120);
assert.equal(p.limiting, 'metal');
assert.equal(p.hours, 120);
assert.equal(p.hoursByResource.wood, Infinity);

// Slots: 2,500 stone = 3 slots, 150 HQM = 2 slots.
assert.equal(slotsFor({ ...zero(), stone: 2500, hqm: 150 }, RESOURCES), 5);
assert.deepEqual(fillFor({ ...zero(), stone: 100 }, 2.5), { ...zero(), stone: 250 });

// Max fill: only stone at 1,000/day in 24 slots = 24 days = 576 h.
const m = maxFill({ ...zero(), stone: 1000 }, 24, RESOURCES);
assert.equal(m.hours, 576);
assert.equal(slotsFor(m.fill, RESOURCES), 24);
// Mixed: the result must fit and one more hour must not.
const up = { wood: 300, stone: 900, metal: 250, hqm: 6 };
const mm = maxFill(up, 24, RESOURCES);
assert.ok(slotsFor(mm.fill, RESOURCES) <= 24);
assert.ok(slotsFor(fillFor(up, (mm.hours + 1) / 24), RESOURCES) > 24);

console.log('upkeep ok');
