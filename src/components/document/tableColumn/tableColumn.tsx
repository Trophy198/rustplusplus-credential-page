import { ReactNode } from 'react';
import styles from './tableColumn.module.css';

const TableColumn = ({ children }: { children: ReactNode }) => {
  return <td className={styles.tablecolumn}>{children}</td>;
};

export default TableColumn;
