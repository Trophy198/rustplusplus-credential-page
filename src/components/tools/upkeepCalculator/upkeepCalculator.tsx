import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  estimateBase,
  fillFor,
  maxFill,
  protection,
  slotsFor,
  zero,
  type Amounts,
  type BlockLine,
  type UpkeepData,
} from '@/lib/upkeep/calc';
import {
  BRACKETS,
  DEPLOYABLES,
  GRADES,
  RESOURCES,
  SHAPES,
  TC_SLOTS,
  type Grade,
  type Resource,
} from '@/lib/upkeep/constants';
import { trackEvent } from '@/lib/gtag';
import Stepper from '../stepper';
import { formatMinutes, num, plural } from '../format';
import styles from '../tool.module.css';

type Counts = Record<string, number>;
type Mode = 'estimate' | 'known';

const DATA: UpkeepData = {
  shapes: SHAPES,
  grades: GRADES,
  deployables: DEPLOYABLES,
  brackets: BRACKETS,
  resources: RESOURCES,
};

const PRESETS: { label: string; lines: BlockLine[]; deployables: Counts }[] = [
  {
    label: '2×2 stone, two floors',
    lines: [
      { shape: 'foundation', grade: 'stone', count: 4 },
      { shape: 'wall', grade: 'stone', count: 15 },
      { shape: 'doorway', grade: 'stone', count: 1 },
      { shape: 'floor', grade: 'stone', count: 8 },
    ],
    deployables: { metaldoor: 1 },
  },
  {
    label: '2×2 metal shell, stone inside',
    lines: [
      { shape: 'foundation', grade: 'stone', count: 4 },
      { shape: 'wall', grade: 'metal', count: 15 },
      { shape: 'doorway', grade: 'metal', count: 1 },
      { shape: 'floor', grade: 'stone', count: 8 },
    ],
    deployables: { garage: 1, metaldoor: 1 },
  },
  {
    label: 'Large compound',
    lines: [
      { shape: 'foundation', grade: 'stone', count: 36 },
      { shape: 'trifoundation', grade: 'stone', count: 12 },
      { shape: 'wall', grade: 'metal', count: 80 },
      { shape: 'wall', grade: 'stone', count: 40 },
      { shape: 'doorway', grade: 'metal', count: 8 },
      { shape: 'floor', grade: 'stone', count: 72 },
      { shape: 'stairs', grade: 'stone', count: 3 },
    ],
    deployables: { armoreddoor: 2, metaldoor: 6, garage: 2 },
  },
];

const RES_SHORT: Record<Resource, string> = { wood: 'Wood', stone: 'Stone', metal: 'Metal frags', hqm: 'HQM' };
/** For use mid-sentence. */
const RES_LOWER: Record<Resource, string> = { wood: 'wood', stone: 'stone', metal: 'metal frags', hqm: 'HQM' };

// Share links: ?b=foundation.stone.4,wall.metal.15&d=metaldoor.1&t=0.2000.500.0&k=0.120.30.0&m=known
const encodeLines = (lines: BlockLine[]) =>
  lines
    .filter((l) => l.count > 0)
    .map((l) => `${l.shape}.${l.grade}.${l.count}`)
    .join(',');
const decodeLines = (v: unknown): BlockLine[] =>
  typeof v !== 'string'
    ? []
    : v.split(',').flatMap((part) => {
        const [shape, grade, n] = part.split('.');
        const count = Number.parseInt(n, 10);
        return SHAPES.some((s) => s.id === shape) && GRADES.some((g) => g.id === grade) && count > 0 && count < 10000
          ? [{ shape, grade: grade as Grade, count }]
          : [];
      });
const encodeAmounts = (a: Amounts) => RESOURCES.map((r) => a[r.id]).join('.');
const decodeAmounts = (v: unknown): Amounts | null => {
  if (typeof v !== 'string') return null;
  const parts = v.split('.').map((n) => Math.max(0, Math.min(1e7, Number(n) || 0)));
  if (parts.length !== RESOURCES.length) return null;
  const out = zero();
  RESOURCES.forEach((r, i) => (out[r.id] = parts[i]));
  return out;
};

const AmountInputs = ({
  value,
  onChange,
  label,
}: {
  value: Amounts;
  onChange: (a: Amounts) => void;
  label: string;
}) => (
  <div className={styles.amounts}>
    {RESOURCES.map((r) => (
      <label key={r.id}>
        <span>{r.name}</span>
        <input
          type="number"
          min={0}
          inputMode="numeric"
          aria-label={`${label}: ${r.name}`}
          value={value[r.id] || ''}
          placeholder="0"
          onChange={(e) => onChange({ ...value, [r.id]: Math.max(0, Math.min(1e7, Number(e.target.value) || 0)) })}
        />
      </label>
    ))}
  </div>
);

const UpkeepCalculator = () => {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('estimate');
  const [lines, setLines] = useState<BlockLine[]>([]);
  const [deployables, setDeployables] = useState<Counts>({});
  const [known, setKnown] = useState<Amounts>(zero());
  const [stock, setStock] = useState<Amounts>(zero());
  const [targetDays, setTargetDays] = useState(3);
  const [copied, setCopied] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    if (!router.isReady || loaded.current) return;
    loaded.current = true;
    const q = router.query;
    const l = decodeLines(q.b);
    const d: Counts = {};
    if (typeof q.d === 'string')
      for (const part of q.d.split(',')) {
        const [id, n] = part.split('.');
        const c = Number.parseInt(n, 10);
        if (DEPLOYABLES.some((x) => x.id === id) && c > 0 && c < 1000) d[id] = c;
      }
    const k = decodeAmounts(q.k);
    const t = decodeAmounts(q.t);
    if (l.length || Object.keys(d).length) {
      setLines(l);
      setDeployables(d);
    } else if (!k) {
      setLines(PRESETS[0].lines);
      setDeployables(PRESETS[0].deployables);
    }
    if (k) setKnown(k);
    if (q.m === 'known' && k) setMode('known');
    if (t) setStock(t);
    else setStock({ ...zero(), stone: 2000, metal: 200 });
  }, [router.isReady, router.query]);

  const estimate = useMemo(() => estimateBase(lines, deployables, DATA), [lines, deployables]);
  const upkeep = mode === 'known' ? known : estimate.upkeep;
  const prot = useMemo(() => protection(stock, upkeep), [stock, upkeep]);
  const target = useMemo(() => fillFor(upkeep, targetDays), [upkeep, targetDays]);
  const best = useMemo(() => maxFill(upkeep, TC_SLOTS, RESOURCES), [upkeep]);
  const used = RESOURCES.filter((r) => upkeep[r.id] > 0);

  const updateLine = (i: number, patch: Partial<BlockLine>) =>
    setLines((ls) => ls.map((l, j) => (j === i ? { ...l, ...patch } : l)));

  const shareUrl = () => {
    const params = new URLSearchParams();
    if (mode === 'known') {
      params.set('m', 'known');
      params.set('k', encodeAmounts(known));
    } else {
      const b = encodeLines(lines);
      if (b) params.set('b', b);
      const d = Object.entries(deployables)
        .filter(([, n]) => n > 0)
        .map(([id, n]) => `${id}.${n}`)
        .join(',');
      if (d) params.set('d', d);
    }
    params.set('t', encodeAmounts(stock));
    return `${window.location.origin}${window.location.pathname}?${params.toString().replace(/%2C/g, ',')}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      trackEvent('upkeep_share');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', shareUrl());
    }
  };

  return (
    <div className={styles.planner} role="region" aria-label="Rust upkeep calculator">
      <div className={styles.presets}>
        <span>Start from:</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => {
              setMode('estimate');
              setLines(p.lines);
              setDeployables(p.deployables);
              trackEvent('upkeep_preset', { preset: p.label });
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.inputs}>
          <fieldset className={styles.group}>
            <legend>1. Your upkeep</legend>
            <div className={styles.segmented} role="radiogroup" aria-label="How to get upkeep">
              <button type="button" role="radio" aria-checked={mode === 'estimate'} onClick={() => setMode('estimate')}>
                Estimate from my base
              </button>
              <button type="button" role="radio" aria-checked={mode === 'known'} onClick={() => setMode('known')}>
                Copy from my TC
              </button>
            </div>

            {mode === 'estimate' ? (
              <>
                <ul className={styles.rows}>
                  {lines.map((l, i) => (
                    <li key={i} className={styles.lineRow}>
                      <Stepper label="pieces" value={l.count} onChange={(n) => updateLine(i, { count: n })} />
                      <select
                        aria-label="Building piece"
                        value={l.shape}
                        onChange={(e) => updateLine(i, { shape: e.target.value })}
                      >
                        {SHAPES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      <select
                        aria-label="Grade"
                        value={l.grade}
                        onChange={(e) => updateLine(i, { grade: e.target.value as Grade })}
                      >
                        {GRADES.map((g) => (
                          <option key={g.id} value={g.id}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        className={styles.remove}
                        aria-label="Remove line"
                        onClick={() => setLines((ls) => ls.filter((_, j) => j !== i))}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.addLine}
                  onClick={() => setLines((ls) => [...ls, { shape: 'wall', grade: 'stone', count: 1 }])}
                >
                  + Add building pieces
                </button>
                <details open={DEPLOYABLES.some((d) => deployables[d.id])}>
                  <summary>Doors, hatches and windows</summary>
                  <ul className={styles.rows}>
                    {DEPLOYABLES.map((d) => (
                      <li key={d.id}>
                        <span className={styles.name}>{d.name}</span>
                        <Stepper
                          label={d.name}
                          value={deployables[d.id] ?? 0}
                          onChange={(n) => setDeployables((s) => ({ ...s, [d.id]: n }))}
                        />
                      </li>
                    ))}
                  </ul>
                </details>
              </>
            ) : (
              <>
                <p className={styles.hint}>
                  Open your Tool Cupboard and copy the upkeep it shows per 24 hours. This is exact for your base and
                  your server&apos;s settings.
                </p>
                <AmountInputs value={known} onChange={setKnown} label="Upkeep per 24 h" />
              </>
            )}
          </fieldset>

          <fieldset className={styles.group}>
            <legend>2. In your Tool Cupboard now</legend>
            <AmountInputs value={stock} onChange={setStock} label="In the TC" />
          </fieldset>

          <fieldset className={styles.group}>
            <legend>3. Plan a refill</legend>
            <label className={styles.inline}>
              Protect for
              <input
                type="number"
                min={0.5}
                max={60}
                step={0.5}
                value={targetDays}
                onChange={(e) => setTargetDays(Math.max(0.5, Math.min(60, Number(e.target.value) || 1)))}
              />
              days
            </label>
          </fieldset>
        </div>

        <aside className={styles.results} aria-live="polite">
          <p className={styles.big}>
            <span>Protected for</span>
            <strong>{used.length ? formatMinutes(prot.hours * 60) : '–'}</strong>
          </p>
          {prot.limiting && used.length > 1 && Number.isFinite(prot.hours) && (
            <p className={styles.note}>
              {RES_SHORT[prot.limiting]} is the first to run out. After that, pieces that need{' '}
              {RES_LOWER[prot.limiting]} start to decay while the rest stay protected.
            </p>
          )}

          <dl className={styles.stats}>
            {mode === 'estimate' && (
              <>
                <dt>Pieces counted</dt>
                <dd>{num(estimate.blocks)}</dd>
                <dt>Upkeep rate</dt>
                <dd>{(estimate.fraction * 100).toFixed(1)}% / day</dd>
              </>
            )}
            {used.map((r) => (
              <Fragment key={r.id}>
                <dt>{r.name} per 24 h</dt>
                <dd>
                  {num(upkeep[r.id])}
                  <span className={styles.sub}> · lasts {formatMinutes(prot.hoursByResource[r.id] * 60)}</span>
                </dd>
              </Fragment>
            ))}
          </dl>

          {used.length > 0 && (
            <>
              <h3 className={styles.subhead}>
                For {targetDays} {plural(targetDays, 'day', 'days')} of protection
              </h3>
              <ul className={styles.needs}>
                {used.map((r) => {
                  const add = Math.max(0, target[r.id] - stock[r.id]);
                  return (
                    <li key={r.id}>
                      {num(target[r.id])} {RES_LOWER[r.id]}
                      {add > 0 ? ` (add ${num(add)})` : ' (you have enough)'}
                    </li>
                  );
                })}
                <li>
                  {slotsFor(target, RESOURCES)} of {TC_SLOTS} slots
                  {slotsFor(target, RESOURCES) > TC_SLOTS ? ': too much for one TC' : ''}
                </li>
              </ul>

              <h3 className={styles.subhead}>Most a full TC can hold</h3>
              <p className={styles.note}>
                <strong>{formatMinutes(best.hours * 60)}</strong> with{' '}
                {used.map((r, i) => (
                  <span key={r.id}>
                    {i > 0 ? ', ' : ''}
                    {num(best.fill[r.id])} {RES_LOWER[r.id]}
                  </span>
                ))}
                .
              </p>
            </>
          )}

          <button type="button" className={styles.share} onClick={copyLink}>
            {copied ? 'Link copied' : 'Copy link to this base'}
          </button>
        </aside>
      </div>
    </div>
  );
};

export default UpkeepCalculator;
