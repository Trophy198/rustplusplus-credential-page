import DropDownMenu from './dropDownMenu';
import { MenuRender } from '@/types/sidebarTypes';
import styles from './sectionHeader.module.css';

const SectionHeader = ({ menuItems }: MenuRender) => {
  return (
    <div className={styles.container}>
      {menuItems.map((items) => (
        <DropDownMenu key={items.id} items={items} />
      ))}
    </div>
  );
};

export default SectionHeader;
