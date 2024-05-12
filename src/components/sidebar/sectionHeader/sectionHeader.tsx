import SubMenu from '../subMenu/subMenu';
import { MenuRender } from '@/types/sidebarTypes';
import styles from './sectionHeader.module.css';

const SectionHeader = ({ menuItems }: MenuRender) => {
  return (
    <nav className={styles.container}>
      {menuItems?.map((items) => (
        <SubMenu key={items.id} items={items} />
      ))}
    </nav>
  );
};

export default SectionHeader;
