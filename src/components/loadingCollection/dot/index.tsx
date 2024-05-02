import React from 'react';
import styles from './dot.module.css';

const dot = () => {
  return (
    <div className={styles.container}>
      <span className={`${styles.dot} ${styles.dot1}`}></span>
      <span className={`${styles.dot} ${styles.dot2}`}></span>
      <span className={`${styles.dot} ${styles.dot3}`}></span>
      <span className={`${styles.dot} ${styles.dot4}`}></span>
      <span className={`${styles.dot} ${styles.dot5}`}></span>
    </div>
  );
};

export default dot;
