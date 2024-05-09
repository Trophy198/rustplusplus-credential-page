import SectionHeader from './sectionHeader/sectionHeader';
import styles from './sidebar.module.css';
import { MenuRender } from '@/types/sidebarTypes';

const Sidebar = ({ menuItems }: MenuRender) => {
  return (
    <div className={styles.container}>
      <SectionHeader menuItems={menuItems} />
    </div>
  );
};

export default Sidebar;
