import styles from './tool.module.css';

/** − [n] + counter used by the tools. */
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

export default Stepper;
