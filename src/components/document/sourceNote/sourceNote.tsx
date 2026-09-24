import type { ContentMeta } from '@/lib/content';
import styles from './sourceNote.module.css';

/**
 * Provenance banner for documentation mirrored from the upstream rustplusplus
 * repository: names the source file, license and sync date so readers can see
 * this is a synced copy, not original writing.
 */
const SourceNote = ({ meta }: { meta: ContentMeta }) => {
  if (!meta.upstream) return null;
  const synced = meta.syncedAt ? meta.syncedAt.slice(0, 10) : null;
  return (
    <aside className={styles.note}>
      Reference documentation from{' '}
      <a href={meta.upstream} target="_blank" rel="noopener noreferrer">
        alexemanuelol/rustplusplus · {meta.upstreamPath}
      </a>
      {meta.license ? ` (${meta.license})` : ''}
      {synced ? `, synced ${synced}` : ''}
      {meta.upstreamSha ? ` at ${meta.upstreamSha.slice(0, 7)}` : ''}. Found a mistake? Fix it upstream and it will flow
      here on the next sync.
    </aside>
  );
};

export default SourceNote;
