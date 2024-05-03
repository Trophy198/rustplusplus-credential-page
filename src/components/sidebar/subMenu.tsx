import { MenuItemProps } from '@/types/sidebarTypes';
import Link from 'next/link';
import styles from './subMenu.module.css';
import { usePathname } from 'next/navigation';

const SubMenu = ({
  items,
  selectMenu,
  selectedItemId,
}: MenuItemProps & {
  selectMenu: (id: string) => void;
  selectedItemId: string | null;
}) => {
  const path = usePathname();

  return (
    <li className={styles.container}>
      <Link
        href={items.href}
        className={`${styles.subLinks} ${
          selectedItemId === items.id && path?.includes(items.id)
            ? styles.selected
            : ''
        }`}
        onClick={() => selectMenu(items.id)}
      >
        {items.label}
      </Link>
    </li>
  );
};

export default SubMenu;
