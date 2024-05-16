import { ReactNode } from 'react';
import styles from './heading2.module.css';

const Heading2 = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.heading2}>{children}</h2>;
};

export default Heading2;
