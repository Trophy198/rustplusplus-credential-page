import SectionHeader from './sectionHeader';
import menuItems from '../../config/menuItems';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SectionHeader menuItems={menuItems} />
    </div>
  );
};

export default Sidebar;
