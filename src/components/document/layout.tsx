import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import { MenuRender } from '@/types/sidebarTypes';
import { ReactNode, useLayoutEffect } from 'react';
import SidebarMenu from '../sidebarMenu/sidebarMenu';
import useSidebarStore from '@/store/useSidebarStore';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  menuItems: MenuRender['menuItems'];
}

const DocumentLayout = ({ children, menuItems }: LayoutProps) => {
  const { isSidebarOpen, setSidebarClosed } = useSidebarStore();
  const router = useRouter();

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarClosed();
      }
    };

    const handleRouteChange = () => {
      setSidebarClosed();
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, setSidebarClosed]);

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
