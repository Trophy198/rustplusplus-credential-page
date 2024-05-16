import { ReactNode } from 'react';
import styles from './strong.module.css';

const Strong = ({ children }: { children: ReactNode }) => {
  return <strong className={styles.strong}>{children}</strong>;
};

export default Strong;
