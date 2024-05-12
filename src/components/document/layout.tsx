import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import { MenuRender } from '@/types/sidebarTypes';
import { ReactNode } from 'react';
import SidebarMenu from '../sidebarMenu/sidebarMenu';

interface LayoutProps {
  children: ReactNode;
  menuItems: MenuRender['menuItems'];
}

const DocumentLayout = ({ children, menuItems }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <SidebarMenu />
      <Sidebar menuItems={menuItems} />
      <section>{children}</section>
    </div>
  );
};

export default DocumentLayout;
