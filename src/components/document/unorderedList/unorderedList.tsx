import React, { ReactNode } from 'react';
import styles from './unorderedList.module.css';

const UnorderedList = ({ items }: { items: ReactNode }) => {
  return <ul className={styles.unorderedlist}>{items}</ul>;
};

export default UnorderedList;
