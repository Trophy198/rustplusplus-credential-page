import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import { MenuRender } from '@/types/sidebarTypes';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  menuItems: MenuRender['menuItems'];
}

const DocumentLayout = ({ children, menuItems }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar menuItems={menuItems} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default DocumentLayout;
