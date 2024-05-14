import { ReactNode } from 'react';
import styles from './code.module.css';

const Code = ({ children }: { children: ReactNode }) => <code className={styles.highlightCode}>{children}</code>;

export default Code;
