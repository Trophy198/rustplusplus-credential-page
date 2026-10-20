import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { calculate, type Assumptions, type Sources } from '@/lib/power/calc';
import {
  BATTERIES,
  CATEGORY_LABELS,
  CONSUMERS,
  DEFAULT_ASSUMPTIONS,
  GENERATION,
  type Category,
} from '@/lib/power/constants';
import { trackEvent } from '@/lib/gtag';
import styles from './powerPlanner.module.css';

type Counts = Record<string, number>;

const PRESETS: { label: string; consumers: Counts; batteries: Counts; sources: Sources }[] = [
  {
    label: 'Turret compound',
    consumers: { turret: 4, ceiling: 4, smartalarm: 1, storagemonitor: 1 },
    batteries: { large: 1 },
    sources: { solar: 0, wind: 1, generators: 0 },
  },
  {
    label: 'Hemp farm',
    consumers: { pump: 1, ceiling: 6 },
    batteries: { medium: 1 },
    sources: { solar: 3, wind: 0, generators: 0 },
  },
  {
    label: 'Raid alarm only',
    consumers: { smartalarm: 1, storagemonitor: 1, hbhf: 1 },
    batteries: { small: 1 },
    sources: { solar: 1, wind: 0, generators: 0 },
  },
];

const NO_SOURCES: Sources = { solar: 0, wind: 0, generators: 0 };

/** "2 h 05 min", "45 min", "never". */
export function formatMinutes(min: number): string {
  if (!Number.isFinite(min)) return 'never';
  if (min < 1) return '< 1 min';
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  if (h === 0) return `${m} min`;
  if (h >= 48) return `${(min / 1440).toFixed(1)} days`;
  return `${h} h ${String(m).padStart(2, '0')} min`;
}

const num = (n: number) => Math.round(n).toLocaleString('en-US');
const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);

// Share links: ?l=turret.4,sam.1&b=large.1&s=2.1.0&w=60
const encodeCounts = (c: Counts) =>
  Object.entries(c)
    .filter(([, n]) => n > 0)
    .map(([k, n]) => `${k}.${n}`)
    .join(',');
const decodeCounts = (v: unknown, allowed: readonly { id: string }[]): Counts => {
  const out: Counts = {};
  if (typeof v !== 'string') return out;
  for (const part of v.split(',')) {
    const [k, n] = part.split('.');
    const q = Number.parseInt(n, 10);
    if (allowed.some((a) => a.id === k) && q > 0 && q < 1000) out[k] = q;
  }
  return out;
};

const Stepper = ({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) => (
  <span className={styles.stepper}>
    <button type="button" aria-label={`Fewer ${label}`} onClick={() => onChange(Math.max(0, value - 1))}>
      −
    </button>
    <input
      type="number"
      min={0}
      max={999}
      inputMode="numeric"
      aria-label={label}
      value={value}
      onChange={(e) => onChange(Math.min(999, Math.max(0, Number.parseInt(e.target.value, 10) || 0)))}
    />
    <button type="button" aria-label={`More ${label}`} onClick={() => onChange(Math.min(999, value + 1))}>
      +
    </button>
  </span>
);

const PowerPlanner = () => {
  const router = useRouter();
  const [consumers, setConsumers] = useState<Counts>({});
  const [batteries, setBatteries] = useState<Counts>({});
  const [sources, setSources] = useState<Sources>(NO_SOURCES);
  const [assumptions, setAssumptions] = useState<Assumptions>(DEFAULT_ASSUMPTIONS);
  const [copied, setCopied] = useState(false);
  const loaded = useRef(false);
  // Which consumer categories are expanded. Owned here (not derived from counts)
  // so a section the user opened doesn't snap shut when its counts drop to 0.
  const [openCats, setOpenCats] = useState<Set<Category>>(() => new Set<Category>(['defense']));
  const reveal = (counts: Counts) =>
    setOpenCats((prev) => {
      const next = new Set(prev);
      for (const c of CONSUMERS) if (counts[c.id]) next.add(c.category);
      return next;
    });

  // Restore from a shared link once the router has the query.
  useEffect(() => {
    if (!router.isReady || loaded.current) return;
    loaded.current = true;
    const q = router.query;
    const c = decodeCounts(q.l, CONSUMERS);
    const b = decodeCounts(q.b, BATTERIES);
    if (Object.keys(c).length || Object.keys(b).length) {
      setConsumers(c);
      setBatteries(b);
      reveal(c);
    } else {
      setConsumers(PRESETS[0].consumers);
      reveal(PRESETS[0].consumers);
      setBatteries(PRESETS[0].batteries);
      setSources(PRESETS[0].sources);
    }
    if (typeof q.s === 'string') {
      const [solar, wind, generators] = q.s.split('.').map((n) => Math.min(999, Math.max(0, Number(n) || 0)));
      setSources({ solar, wind, generators });
    }
    const w = Number(q.w);
    if (w > 0 && w <= 150) setAssumptions((a) => ({ ...a, windRw: w }));
  }, [router.isReady, router.query]);

  const result = useMemo(
    () => calculate({ consumers, batteries, sources }, CONSUMERS, BATTERIES, GENERATION, assumptions),
    [consumers, batteries, sources, assumptions],
  );

  const shareUrl = () => {
    const params = new URLSearchParams();
    const l = encodeCounts(consumers);
    const b = encodeCounts(batteries);
    if (l) params.set('l', l);
    if (b) params.set('b', b);
    params.set('s', `${sources.solar}.${sources.wind}.${sources.generators}`);
    if (assumptions.windRw !== DEFAULT_ASSUMPTIONS.windRw) params.set('w', String(assumptions.windRw));
    return `${window.location.origin}${window.location.pathname}?${params.toString().replace(/%2C/g, ',')}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      trackEvent('power_planner_share');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', shareUrl());
    }
  };

  const applyPreset = (p: (typeof PRESETS)[number]) => {
    setConsumers(p.consumers);
    setBatteries(p.batteries);
    setSources(p.sources);
    reveal(p.consumers);
    trackEvent('power_planner_preset', { preset: p.label });
  };

  const categories = Object.keys(CATEGORY_LABELS) as Category[];
  const neutralGap = result.inputForNeutral - result.averageInput;

  return (
    <div className={styles.planner} role="region" aria-label="Rust power planner">
      <div className={styles.presets}>
        <span>Start from:</span>
        {PRESETS.map((p) => (
          <button key={p.label} type="button" onClick={() => applyPreset(p)}>
            {p.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            setConsumers({});
            setBatteries({});
            setSources(NO_SOURCES);
          }}
        >
          Clear
        </button>
      </div>

      <div className={styles.grid}>
        <div className={styles.inputs}>
          <fieldset className={styles.group}>
            <legend>1. What you are powering</legend>
            {categories.map((cat) => (
              <details
                key={cat}
                open={openCats.has(cat)}
                onToggle={(e) => {
                  const isOpen = e.currentTarget.open;
                  setOpenCats((prev) => {
                    if (prev.has(cat) === isOpen) return prev;
                    const next = new Set(prev);
                    if (isOpen) next.add(cat);
                    else next.delete(cat);
                    return next;
                  });
                }}
              >
                <summary>{CATEGORY_LABELS[cat]}</summary>
                <ul className={styles.rows}>
                  {CONSUMERS.filter((c) => c.category === cat).map((c) => (
                    <li key={c.id}>
                      <span className={styles.name}>
                        {c.name}{' '}
                        <span className={styles.rw} title={c.verify}>
                          {c.verify ? '≈' : ''}
                          {c.rw} rW
                        </span>
                      </span>
                      <Stepper
                        label={c.name}
                        value={consumers[c.id] ?? 0}
                        onChange={(n) => setConsumers((s) => ({ ...s, [c.id]: n }))}
                      />
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </fieldset>

          <fieldset className={styles.group}>
            <legend>2. Batteries</legend>
            <ul className={styles.rows}>
              {BATTERIES.map((b) => (
                <li key={b.id}>
                  <span className={styles.name}>
                    {b.name}{' '}
                    <span className={styles.rw}>
                      {num(b.capacity)} rWm · out {b.maxOutput} rW
                    </span>
                  </span>
                  <Stepper
                    label={b.name}
                    value={batteries[b.id] ?? 0}
                    onChange={(n) => setBatteries((s) => ({ ...s, [b.id]: n }))}
                  />
                </li>
              ))}
            </ul>
          </fieldset>

          <fieldset className={styles.group}>
            <legend>3. Power sources</legend>
            <ul className={styles.rows}>
              <li>
                <span className={styles.name}>
                  Large Solar Panel <span className={styles.rw}>up to {GENERATION.solarPeak} rW, daytime only</span>
                </span>
                <Stepper
                  label="solar panels"
                  value={sources.solar}
                  onChange={(n) => setSources((s) => ({ ...s, solar: n }))}
                />
              </li>
              <li>
                <span className={styles.name}>
                  Wind Turbine <span className={styles.rw}>≈{assumptions.windRw} rW average, set below</span>
                </span>
                <Stepper
                  label="wind turbines"
                  value={sources.wind}
                  onChange={(n) => setSources((s) => ({ ...s, wind: n }))}
                />
              </li>
              <li>
                <span className={styles.name}>
                  Small Generator{' '}
                  <span className={styles.rw}>
                    {GENERATION.generatorRw} rW, {GENERATION.generatorLgfPerHour} LGF/h
                  </span>
                </span>
                <Stepper
                  label="small generators"
                  value={sources.generators}
                  onChange={(n) => setSources((s) => ({ ...s, generators: n }))}
                />
              </li>
            </ul>
            <details className={styles.advanced}>
              <summary>Assumptions</summary>
              <label>
                Wind turbine average output (rW)
                <input
                  type="number"
                  min={1}
                  max={150}
                  value={assumptions.windRw}
                  onChange={(e) =>
                    setAssumptions((a) => ({ ...a, windRw: Math.min(150, Math.max(1, Number(e.target.value) || 1)) }))
                  }
                />
                <small>
                  Roughly 60 rW from 6 or more floors up and 80 from 9 or more; less near the ground or within 15 m of
                  other turbines and buildings.
                </small>
              </label>
              <label>
                Day/night cycle (real minutes)
                <input
                  type="number"
                  min={10}
                  max={600}
                  value={assumptions.cycleMinutes}
                  onChange={(e) =>
                    setAssumptions((a) => {
                      const cycleMinutes = Math.min(600, Math.max(10, Number(e.target.value) || 60));
                      return { ...a, cycleMinutes, solarMinutes: Math.min(a.solarMinutes, cycleMinutes) };
                    })
                  }
                />
              </label>
              <label>
                Minutes per cycle that solar produces
                <input
                  type="number"
                  min={0}
                  max={assumptions.cycleMinutes}
                  value={assumptions.solarMinutes}
                  onChange={(e) =>
                    setAssumptions((a) => ({
                      ...a,
                      solarMinutes: Math.min(a.cycleMinutes, Math.max(0, Number(e.target.value) || 0)),
                    }))
                  }
                />
              </label>
              <label>
                Energy from one solar panel per cycle (rWm)
                <input
                  type="number"
                  min={10}
                  max={1200}
                  value={assumptions.solarRwmPerCycle}
                  onChange={(e) =>
                    setAssumptions((a) => ({
                      ...a,
                      solarRwmPerCycle: Math.min(1200, Math.max(10, Number(e.target.value) || 480)),
                    }))
                  }
                />
                <small>
                  About 480 for a panel with a clear view of the sky. Less if shaded or facing away from the sun.
                </small>
              </label>
              <button type="button" onClick={() => setAssumptions(DEFAULT_ASSUMPTIONS)}>
                Reset assumptions
              </button>
            </details>
          </fieldset>
        </div>

        <aside className={styles.results} aria-live="polite">
          <p className={styles.big}>
            <span>Total draw</span>
            <strong>{num(result.load)} rW</strong>
          </p>

          <dl className={styles.stats}>
            <dt>Battery storage</dt>
            <dd>{num(result.capacity)} rWm</dd>
            <dt>Battery max output</dt>
            <dd>{num(result.maxOutput)} rW</dd>
            <dt>Runtime on a full charge, no input</dt>
            <dd>{result.load > 0 && result.capacity > 0 ? formatMinutes(result.runtimeMinutes) : '–'}</dd>
            <dt>Average input from your sources</dt>
            <dd>{result.averageInput.toFixed(1)} rW</dd>
            <dt>Input needed to break even</dt>
            <dd>{result.load > 0 ? `${result.inputForNeutral.toFixed(1)} rW` : '–'}</dd>
          </dl>

          {result.load > 0 && result.capacity > 0 && (
            <p className={Number.isFinite(result.minutesUntilEmpty) ? styles.bad : styles.good}>
              {Number.isFinite(result.minutesUntilEmpty)
                ? `Batteries run flat after about ${formatMinutes(result.minutesUntilEmpty)}, starting full at nightfall. ${
                    neutralGap > 0
                      ? `You are ${neutralGap.toFixed(1)} rW short on average.`
                      : 'Your sources make enough over a full day, but the batteries cannot store enough for the night.'
                  }`
                : 'Your sources keep the batteries topped up through a full day and night.'}
            </p>
          )}

          {result.warnings.length > 0 && (
            <ul className={styles.warnings}>
              {result.warnings.includes('no-battery') && (
                <li>No battery: anything that should keep running at night or when a source stops needs one.</li>
              )}
              {result.warnings.includes('output-too-low') && (
                <li>
                  Your batteries can deliver {num(result.maxOutput)} rW but the load is {num(result.load)} rW. Devices
                  at the end of the chain will stay off. Add batteries (joined with a Root Combiner) or use larger ones.
                </li>
              )}
              {result.warnings.includes('night-short') && (
                <li>
                  Enough energy over a full cycle, but the batteries hold less than the {num(result.nightReserveNeeded)}{' '}
                  rWm needed to get through the night.
                </li>
              )}
            </ul>
          )}

          {result.load > 0 && (
            <>
              <h3 className={styles.subhead}>To power this load on its own</h3>
              <ul className={styles.needs}>
                <li>
                  <strong>{result.panelsNeeded}</strong> {plural(result.panelsNeeded, 'solar panel', 'solar panels')},
                  plus at least {num(result.nightReserveNeeded)} rWm of battery for the night
                </li>
                <li>
                  <strong>{result.turbinesNeeded}</strong>{' '}
                  {plural(result.turbinesNeeded, 'wind turbine', 'wind turbines')} at ≈{assumptions.windRw} rW each
                </li>
                <li>
                  <strong>{result.generatorsNeeded}</strong>{' '}
                  {plural(result.generatorsNeeded, 'small generator', 'small generators')}, burning{' '}
                  {num(result.generatorsNeeded * GENERATION.generatorLgfPerHour)} LGF per hour
                </li>
              </ul>
            </>
          )}
          {result.lgfPerHour > 0 && (
            <p className={styles.note}>Your generators burn {num(result.lgfPerHour)} Low Grade Fuel per real hour.</p>
          )}

          <button type="button" className={styles.share} onClick={copyLink}>
            {copied ? 'Link copied' : 'Copy link to this setup'}
          </button>
        </aside>
      </div>
    </div>
  );
};

export default PowerPlanner;
