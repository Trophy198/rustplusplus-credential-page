import { ReactNode } from 'react';
import styles from './blockquote.module.css';

interface CodeBlockProps {
  children: ReactNode;
}

const Blockquote = ({ children }: CodeBlockProps) => {
  return (
    <blockquote className={styles.container}>
      <p className={styles.description}>{children}</p>
    </blockquote>
  );
};

export default Blockquote;
