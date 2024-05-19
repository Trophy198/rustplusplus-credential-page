import { ReactNode } from 'react';
import styles from './tableHeader.module.css';

const TableHeader = ({ children }: { children: ReactNode }) => {
  return <th className={styles.tablerow}>{children}</th>;
};

export default TableHeader;
