/** Number and duration formatting shared by the tools. */

/** "2 h 05 min", "45 min", "never". */
export function formatMinutes(min: number): string {
  if (!Number.isFinite(min)) return 'never';
  if (min < 1) return '< 1 min';
  if (min >= 48 * 60) return `${(min / 1440).toFixed(1)} days`;
  const total = Math.round(min);
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return `${m} min`;
  return `${h} h ${String(m).padStart(2, '0')} min`;
}

export const num = (n: number) => Math.round(n).toLocaleString('en-US');
export const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);
