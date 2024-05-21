import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import { MenuRender } from '@/types/sidebarTypes';
import { ReactNode } from 'react';
import ModalBackground from '@/components/modalBackground/modalBackground';

interface LayoutProps {
  children: ReactNode;
  menuItems: MenuRender['menuItems'];
}

const DocumentLayout = ({ children, menuItems }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <ModalBackground />
      <Sidebar menuItems={menuItems} />
      <section>{children}</section>
    </div>
  );
};

export default DocumentLayout;
