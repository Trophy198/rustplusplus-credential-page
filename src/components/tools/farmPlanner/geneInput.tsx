import styles from '../tool.module.css';

export const GENE_LETTERS = ['G', 'Y', 'H', 'W', 'X'] as const;
export type GeneLetter = (typeof GENE_LETTERS)[number];

/** Normalise free text to six gene letters, or null if it isn't one. */
export function parseGenes(text: string): GeneLetter[] | null {
  const t = text.toUpperCase().replace(/[^GYHWX]/g, '');
  return t.length === 6 ? (t.split('') as GeneLetter[]) : null;
}

const next = (g: GeneLetter): GeneLetter => GENE_LETTERS[(GENE_LETTERS.indexOf(g) + 1) % GENE_LETTERS.length];

/**
 * Six gene slots. Click a slot to cycle G → Y → H → W → X, or paste/type a
 * six-letter string into the text box.
 */
const GeneInput = ({
  value,
  onChange,
  label,
}: {
  value: GeneLetter[];
  onChange: (g: GeneLetter[]) => void;
  label: string;
}) => (
  <span className={styles.genes} role="group" aria-label={label}>
    {value.map((g, i) => (
      <button
        key={i}
        type="button"
        className={styles[`gene${g}`]}
        aria-label={`${label}, slot ${i + 1}: ${g}`}
        onClick={() => onChange(value.map((x, j) => (j === i ? next(x) : x)))}
      >
        {g}
      </button>
    ))}
    <input
      aria-label={`${label} as text`}
      className={styles.geneText}
      defaultValue={value.join('')}
      key={value.join('')}
      maxLength={6}
      onBlur={(e) => {
        const parsed = parseGenes(e.target.value);
        if (parsed) onChange(parsed);
        else e.target.value = value.join('');
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
      }}
    />
  </span>
);

export default GeneInput;
