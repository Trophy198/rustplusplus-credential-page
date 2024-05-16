import { ReactNode } from 'react';
import styles from './heading.module.css';

const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default Heading;
