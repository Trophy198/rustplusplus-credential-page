import Link from 'next/link';
import styles from './subMenu.module.css';
import { Props } from '@/types/sidebarTypes';
import { usePathname } from 'next/navigation';
import useSidebarStore from '@/store/useSidebarStore';

const SubMenu = ({ items }: Props) => {
  const path = usePathname();

  const isSelected = (itemPath: string): boolean => {
    return path.endsWith(itemPath);
  };

  const { toggleSidebar } = useSidebarStore();

  return (
    <ul className={styles.container} onClick={toggleSidebar}>
      <li className={styles.menuItems}>
        <Link href={items.href} className={`${styles.header} ${isSelected(items.href) ? styles.selected : ''}`}>
          {items.label}
        </Link>
        {items.subItems && (
          <div className={styles.subMenu}>
            <div className={styles.subMenuItem}>
              <ul className={styles.subMenuItems}>
                {items.subItems.map((subItem) => (
                  <li key={subItem.id} className={styles.subItem}>
                    <Link
                      href={subItem.href}
                      className={`${styles.links} ${isSelected(subItem.href) ? styles.selected : ''}`}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
};

export default SubMenu;
