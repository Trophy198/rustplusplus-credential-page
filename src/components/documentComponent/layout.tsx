import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import { MenuRender } from '@/types/sidebarTypes';

interface LayoutProps {
  children: React.ReactNode;
  menuItems: MenuRender['menuItems'];
}

const Layout = ({ children, menuItems }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar menuItems={menuItems} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
