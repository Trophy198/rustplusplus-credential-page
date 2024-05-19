import { ReactNode } from 'react';
import styles from './tableRow.module.css';

const TableRow = ({ children }: { children: ReactNode }) => {
  return <tr className={styles.tablerow}>{children}</tr>;
};

export default TableRow;
