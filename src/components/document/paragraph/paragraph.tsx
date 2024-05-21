import { ReactNode } from 'react';
import styles from './paragraph.module.css';

const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className={styles.ptag}>{children}</p>;
};

export default Paragraph;
