import { ReactNode } from 'react';
import styles from './table.module.css';

const Table = ({ children }: { children: ReactNode }) => {
  return <table className={styles.table}>{children}</table>;
};

export default Table;
