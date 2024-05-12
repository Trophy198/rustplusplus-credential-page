import SectionHeader from './sectionHeader/sectionHeader';
import styles from './sidebar.module.css';
import { MenuRender } from '@/types/sidebarTypes';
import useSidebarStore from '@/store/useSidebarStore';

const Sidebar = ({ menuItems }: MenuRender) => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.close}`}>
      <SectionHeader menuItems={menuItems} />
    </aside>
  );
};

export default Sidebar;
