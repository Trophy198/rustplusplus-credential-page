import { ReactNode } from 'react';
import styles from './preFormatted.module.css';

const PreFormatted = ({ children }: { children: ReactNode }) => {
  return <pre className={styles.preformatted}>{children}</pre>;
};

export default PreFormatted;
