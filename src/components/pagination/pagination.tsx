import Link from 'next/link';
import styles from './pagination.module.css';

interface PaginationProps {
  previousHref: string | null;
  previousLabel: string | null;
  nextHref: string | null;
  nextLabel: string | null;
}

const Pagination = ({ previousHref, previousLabel, nextHref, nextLabel }: PaginationProps) => {
  return (
    <nav className={styles.container}>
      {previousHref ? (
        <Link className={styles.link} href={previousHref}>
          <span className={styles.arrow}>&larr;</span> {previousLabel}
        </Link>
      ) : (
        <span></span>
      )}
      {nextHref ? (
        <Link className={`${styles.link} ${styles.nextlink}`} href={nextHref}>
          {nextLabel} <span className={styles.arrow}>&rarr;</span>
        </Link>
      ) : (
        <span></span>
      )}
    </nav>
  );
};

export default Pagination;
