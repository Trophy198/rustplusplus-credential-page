import React, { ReactNode } from 'react';
import styles from './orderedList.module.css';

const OrderedList = ({ items, start }: { items: ReactNode; start?: number }) => {
  return (
    <ol start={start} className={styles.orderedlist}>
      {items}
    </ol>
  );
};

export default OrderedList;
