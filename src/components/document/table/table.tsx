import { ReactNode } from 'react';
import styles from './table.module.css';

const Table = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.tablecontainer}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default Table;
