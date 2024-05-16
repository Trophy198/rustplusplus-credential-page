import { ReactNode } from 'react';
import styles from './listItem.module.css';

const ListItem = ({ children }: { children: ReactNode }) => {
  return <li className={styles.listitem}>{children}</li>;
};

export default ListItem;
