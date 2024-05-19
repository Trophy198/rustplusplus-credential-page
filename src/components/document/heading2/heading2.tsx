import { ReactNode } from 'react';
import styles from './heading2.module.css';

const Heading2 = ({ id, children }: { id?: string; children: ReactNode }) => {
  return (
    <h2 className={styles.heading2} id={id}>
      {children}
    </h2>
  );
};

export default Heading2;
