import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { crossbreed, groundQuality, neighbourCells, planFarm, type Genes } from '@/lib/farm/calc';
import {
  CEILING_LIGHT,
  CROPS,
  EARLY_STAGES,
  GENE_WEIGHT,
  GROUND,
  PLANTERS,
  SPRINKLER,
  WATER_PUMP,
  type Gene,
} from '@/lib/farm/constants';
import { trackEvent } from '@/lib/gtag';
import GeneInput, { parseGenes } from './geneInput';
import { formatMinutes, num, plural } from '../format';
import styles from '../tool.module.css';

type Tab = 'breed' | 'size';

/** Planter layouts for crossbreeding: columns × cells. */
const GRIDS = {
  large: { cols: 3, cells: 9, name: 'Large Planter (3×3)' },
  small: { cols: 3, cells: 3, name: 'Small Planter (1×3)' },
};
type GridId = keyof typeof GRIDS;

const DEFAULT_GRID: (Genes | null)[] = [null, 'GGGYYY', null, 'GGGYYY', 'WXHGYW', 'GGGYYY', null, 'GGGYYY', null].map(
  (s) => (s ? (s.split('') as Genes) : null),
);

const GeneLetters = ({ genes, changed, ties }: { genes: Gene[]; changed?: boolean[]; ties?: (Gene[] | null)[] }) => (
  <span className={styles.genesResult}>
    {genes.map((g, i) => {
      const tie = ties?.[i];
      return (
        <span
          key={i}
          className={`${styles[`gene${tie ? 'Tie' : g}`]} ${changed?.[i] ? styles.geneChanged : ''}`}
          title={tie ? `Tie: one of ${tie.join(' / ')}` : undefined}
        >
          {tie ? tie.join('/') : g}
        </span>
      );
    })}
  </span>
);

const FarmPlanner = () => {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('breed');

  // Crossbreed state
  const [gridId, setGridId] = useState<GridId>('large');
  const [cells, setCells] = useState<(Genes | null)[]>(DEFAULT_GRID);

  // Farm size state
  const [cropId, setCropId] = useState('hemp');
  const [genes, setGenes] = useState<Genes>('GGGYYY'.split('') as Genes);
  const [fertilized, setFertilized] = useState(true);
  const [otherQuality, setOtherQuality] = useState(100);
  const [planterId, setPlanterId] = useState('large');
  const [target, setTarget] = useState(1000);
  const [replant, setReplant] = useState(true);
  const [copied, setCopied] = useState(false);
  const loaded = useRef(false);

  // Share links: ?tab=breed&g=large&c=-,GGGYYY,-,... or ?tab=size&crop=hemp&genes=GGGYYY&t=1000&p=large&f=1&q=100&r=1
  useEffect(() => {
    if (!router.isReady || loaded.current) return;
    loaded.current = true;
    const q = router.query;
    if (q.tab === 'size') setTab('size');
    if (q.g === 'small' || q.g === 'large') setGridId(q.g);
    if (typeof q.c === 'string') {
      const size = GRIDS[q.g === 'small' ? 'small' : 'large'].cells;
      const parts = q.c.split(',').slice(0, size);
      setCells(Array.from({ length: size }, (_, i) => (parts[i] ? parseGenes(parts[i]) : null)));
    }
    if (typeof q.crop === 'string' && CROPS.some((c) => c.id === q.crop)) setCropId(q.crop);
    if (typeof q.genes === 'string') {
      const parsed = parseGenes(q.genes);
      if (parsed) setGenes(parsed);
    }
    const t = Number(q.t);
    if (t > 0 && t <= 1e6) setTarget(t);
    if (typeof q.p === 'string' && PLANTERS.some((p) => p.id === q.p)) setPlanterId(q.p);
    if (q.f === '0') setFertilized(false);
    const oq = Number(q.q);
    if (oq >= 10 && oq <= 100) setOtherQuality(oq);
    if (q.r === '0') setReplant(false);
  }, [router.isReady, router.query]);

  const grid = GRIDS[gridId];
  const breedResults = useMemo(
    () =>
      cells.map((plant, i) =>
        plant
          ? crossbreed(
              plant,
              neighbourCells(i, grid.cols, grid.cells)
                .map((j) => cells[j])
                .filter((n): n is Genes => n !== null),
              GENE_WEIGHT,
            )
          : null,
      ),
    [cells, grid],
  );

  const crop = CROPS.find((c) => c.id === cropId) ?? CROPS[0];
  const planter = PLANTERS.find((p) => p.id === planterId) ?? PLANTERS[0];
  const quality = groundQuality(crop, fertilized, GROUND) * (otherQuality / 100);
  const plan = useMemo(
    () =>
      planFarm({ crop, genes, quality, target, slotsPerPlanter: planter.slots, replantClones: replant }, EARLY_STAGES),
    [crop, genes, quality, target, planter, replant],
  );
  const sprinklers = plan.waterPerMinute > 0 ? Math.ceil(plan.waterPerMinute / SPRINKLER.deliverPerMin) : 0;
  const sprinklerDuty = sprinklers > 0 ? plan.waterPerMinute / (sprinklers * SPRINKLER.deliverPerMin) : 0;
  const pumps = sprinklers > 0 ? Math.ceil((sprinklers * SPRINKLER.drawPerMin) / WATER_PUMP.perMin) : 0;
  const lights = planter.id === 'large' ? Math.ceil(plan.planters / CEILING_LIGHT.plantersPerLight) : plan.planters;
  const rw = lights * CEILING_LIGHT.rw + pumps * WATER_PUMP.rw;
  const fertilizerPerHour =
    fertilized && Number.isFinite(plan.cycleMinutes) ? (plan.plants * 60) / plan.cycleMinutes : 0;
  const powerLink = `/tools/power-planner?l=${[lights ? `ceiling.${lights}` : '', pumps ? `pump.${pumps}` : '']
    .filter(Boolean)
    .join(',')}`;

  const shareUrl = () => {
    const p = new URLSearchParams();
    if (tab === 'breed') {
      p.set('tab', 'breed');
      p.set('g', gridId);
      p.set('c', cells.map((c) => (c ? c.join('') : '-')).join(','));
    } else {
      p.set('tab', 'size');
      p.set('crop', cropId);
      p.set('genes', genes.join(''));
      p.set('t', String(target));
      p.set('p', planterId);
      if (!fertilized) p.set('f', '0');
      if (otherQuality !== 100) p.set('q', String(otherQuality));
      if (!replant) p.set('r', '0');
    }
    return `${window.location.origin}${window.location.pathname}?${p.toString().replace(/%2C/g, ',')}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      trackEvent('farm_planner_share', { tab });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', shareUrl());
    }
  };

  const changeGrid = (id: GridId) => {
    setGridId(id);
    setCells((cs) => Array.from({ length: GRIDS[id].cells }, (_, i) => cs[i] ?? null));
  };

  return (
    <div className={styles.planner} role="region" aria-label="Rust farm planner">
      <div className={styles.segmented} role="tablist" aria-label="Farm tool">
        <button type="button" role="tab" aria-selected={tab === 'breed'} onClick={() => setTab('breed')}>
          Crossbreeding
        </button>
        <button type="button" role="tab" aria-selected={tab === 'size'} onClick={() => setTab('size')}>
          Farm size and yield
        </button>
      </div>

      {tab === 'breed' ? (
        <div className={styles.inputs}>
          <fieldset className={styles.group}>
            <legend>Plants in one planter</legend>
            <p className={styles.hint}>
              Enter the genes of each plant. Each card shows what that plant becomes when it reaches its Crossbreed
              stage, using its neighbours&apos; genes as they are now. Click a letter to cycle it, or type six letters.
            </p>
            <label className={styles.inline}>
              Planter
              <select value={gridId} onChange={(e) => changeGrid(e.target.value as GridId)}>
                {(Object.keys(GRIDS) as GridId[]).map((id) => (
                  <option key={id} value={id}>
                    {GRIDS[id].name}
                  </option>
                ))}
              </select>
            </label>
            <div className={styles.planterGrid} style={{ gridTemplateColumns: `repeat(${grid.cols}, minmax(0, 1fr))` }}>
              {cells.map((plant, i) => {
                const res = breedResults[i];
                return (
                  <div key={i} className={styles.cell}>
                    {plant ? (
                      <>
                        <GeneInput
                          label={`Plant ${i + 1}`}
                          value={plant}
                          onChange={(g) => setCells((cs) => cs.map((c, j) => (j === i ? g : c)))}
                        />
                        {res && (
                          <div className={styles.cellResult}>
                            <span>becomes</span>
                            <GeneLetters
                              genes={res.map((s) => s.gene)}
                              changed={res.map((s) => s.changed)}
                              ties={res.map((s) => s.tie)}
                            />
                          </div>
                        )}
                        <button
                          type="button"
                          className={styles.remove}
                          aria-label={`Remove plant ${i + 1}`}
                          onClick={() => setCells((cs) => cs.map((c, j) => (j === i ? null : c)))}
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className={styles.addLine}
                        onClick={() =>
                          setCells((cs) => cs.map((c, j) => (j === i ? ('GGGYYY'.split('') as Genes) : c)))
                        }
                      >
                        + Plant
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <p className={styles.note}>
              Changed slots are outlined. A slot showing two letters is a tie: the game picks one of them, and which one
              is not predictable. Plants crossbreed one at a time, so a neighbour that already crossbred passes on its
              new genes.
            </p>
          </fieldset>
          <button type="button" className={styles.share} onClick={copyLink}>
            {copied ? 'Link copied' : 'Copy link to this planter'}
          </button>
        </div>
      ) : (
        <div className={styles.grid}>
          <div className={styles.inputs}>
            <fieldset className={styles.group}>
              <legend>1. What you grow</legend>
              <label className={styles.inline}>
                Crop
                <select value={cropId} onChange={(e) => setCropId(e.target.value)}>
                  {CROPS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className={styles.inline}>
                Genes <GeneInput label="Genes" value={genes} onChange={setGenes} />
              </div>
              <label className={styles.inline}>
                Planter
                <select value={planterId} onChange={(e) => setPlanterId(e.target.value)}>
                  {PLANTERS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.slots} plants)
                    </option>
                  ))}
                </select>
              </label>
            </fieldset>

            <fieldset className={styles.group}>
              <legend>2. Conditions</legend>
              <label className={styles.inline}>
                <input type="checkbox" checked={fertilized} onChange={(e) => setFertilized(e.target.checked)} />
                Fertilized planters (1 fertilizer per plant)
              </label>
              <label className={styles.inline}>
                Light, water and temperature
                <input
                  type="number"
                  min={10}
                  max={100}
                  value={otherQuality}
                  onChange={(e) => setOtherQuality(Math.max(10, Math.min(100, Number(e.target.value) || 100)))}
                />
                %
              </label>
              <p className={styles.hint}>
                100% means indoors under ceiling lights, planters kept around 60% full, and warm enough (about 30 °C).
                Lower it for outdoor or cold farms.
              </p>
              <label className={styles.inline}>
                <input type="checkbox" checked={replant} onChange={(e) => setReplant(e.target.checked)} />
                Keep the genes by replanting clones
              </label>
            </fieldset>

            <fieldset className={styles.group}>
              <legend>3. Target</legend>
              <label className={styles.inline}>
                <input
                  type="number"
                  min={1}
                  max={1000000}
                  value={target}
                  onChange={(e) => setTarget(Math.max(1, Math.min(1e6, Number(e.target.value) || 1)))}
                />
                {crop.item} per hour
              </label>
            </fieldset>
          </div>

          <aside className={styles.results} aria-live="polite">
            <p className={styles.big}>
              <span>Planters</span>
              <strong>{num(plan.planters)}</strong>
            </p>
            <dl className={styles.stats}>
              <dt>Plants</dt>
              <dd>{num(plan.plants)}</dd>
              <dt>Growing quality</dt>
              <dd>{Math.round(quality * 100)}%</dd>
              <dt>Planting to ripe</dt>
              <dd>{formatMinutes(plan.cycleMinutes)}</dd>
              <dt>Harvest per plant</dt>
              <dd>
                {num(plan.perPlant)} {crop.item}
              </dd>
              <dt>Clones per plant</dt>
              <dd>{plan.clones}</dd>
              <dt>Per planter per hour</dt>
              <dd>{num(plan.perSlotPerHour * planter.slots)}</dd>
            </dl>
            {replant && (
              <p className={styles.note}>
                To keep the genes, clone 1 plant in {plan.clones} each round instead of harvesting it; the rest are
                harvested. The numbers above include that.
              </p>
            )}

            <h3 className={styles.subhead}>Water, light and power</h3>
            <ul className={styles.needs}>
              <li>
                Plants drink <strong>{num(plan.waterPerMinute)}</strong> water per minute
              </li>
              <li>
                <strong>{sprinklers}</strong> {plural(sprinklers, 'sprinkler', 'sprinklers')}, each reaching planters
                within {SPRINKLER.radius} m. Run them about {Math.round(sprinklerDuty * 100)}% of the time (a Timer
                works) so planters stay near 60% full.
              </li>
              <li>
                <strong>{pumps}</strong> {plural(pumps, 'water pump', 'water pumps')} to feed them
              </li>
              <li>
                <strong>{lights}</strong> {plural(lights, 'ceiling light', 'ceiling lights')}
                {planter.id === 'large' ? ', one where four planters meet' : ', one over each planter'}
              </li>
              {fertilizerPerHour > 0 && <li>About {num(fertilizerPerHour)} fertilizer per hour</li>}
              <li>
                Power: <strong>{rw} rW</strong>.{' '}
                <Link href={powerLink} onClick={() => trackEvent('farm_planner_to_power')}>
                  Plan it in the power planner
                </Link>
              </li>
            </ul>
            <button type="button" className={styles.share} onClick={copyLink}>
              {copied ? 'Link copied' : 'Copy link to this farm'}
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default FarmPlanner;
