import SubMenu from '../subMenu/subMenu';
import { MenuRender } from '@/types/sidebarTypes';
import styles from './sectionHeader.module.css';

const SectionHeader = ({ menuItems }: MenuRender) => {
  return (
    <div className={styles.container}>
      {menuItems?.map((items) => (
        <SubMenu key={items.id} items={items} />
      ))}
    </div>
  );
};

export default SectionHeader;
