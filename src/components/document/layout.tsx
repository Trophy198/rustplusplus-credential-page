import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import { MenuRender } from '@/types/sidebarTypes';
import { ReactNode, useLayoutEffect } from 'react';
import SidebarMenu from '../sidebarMenu/sidebarMenu';
import useSidebarStore from '@/store/useSidebarStore';

interface LayoutProps {
  children: ReactNode;
  menuItems: MenuRender['menuItems'];
}

const DocumentLayout = ({ children, menuItems }: LayoutProps) => {
  const { isSidebarOpen, setSidebarClosed } = useSidebarStore();

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarClosed();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarClosed]);

  useLayoutEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isSidebarOpen]);

  return (
    <div className={styles.container}>
      <SidebarMenu />
      <Sidebar menuItems={menuItems} />
      <section>{children}</section>
    </div>
  );
};

export default DocumentLayout;
