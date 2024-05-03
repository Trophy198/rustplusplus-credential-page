import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './dropDownMenu.module.css';
import { MenuItemProps } from '@/types/sidebarTypes';
import SubMenu from './subMenu';
import { usePathname } from 'next/navigation';

const DropdownMenu = ({ items }: MenuItemProps) => {
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const path = usePathname();

  useEffect(() => {
    const lastOpenId = localStorage.getItem('lastOpenMenuId');
    setOpenSubmenuId(lastOpenId);
    setSelectedItemId(lastOpenId);
  }, []);

  const toggleSubMenu = (event: React.MouseEvent, id: string) => {
    const lastId = localStorage.getItem('lastOpenMenuId');
    event.stopPropagation();
    if (openSubmenuId === id) {
      if (lastId !== id) {
        localStorage.setItem('lastOpenMenuId', id);
      } else {
        setOpenSubmenuId(null);
        localStorage.removeItem('lastOpenMenuId');
      }
    } else {
      setOpenSubmenuId(id);
      localStorage.setItem('lastOpenMenuId', id);
    }
  };

  const selectMenu = (id: string) => {
    if (selectedItemId !== id) {
      setSelectedItemId(id);
    }
    localStorage.setItem('lastOpenMenuId', id);
  };

  return (
    <>
      <ul className={styles.container}>
        <li className={styles.menuItems}>
          <Link
            href={items.href}
            className={`${styles.header} ${
              selectedItemId === items.id && path.includes(items.id)
                ? styles.selected
                : ''
            }`}
            onClick={() => selectMenu(items.id)}
          >
            {items.label}
          </Link>
          {items.subItems && (
            <div className={styles.dropDownMenuItems}>
              <div className={styles.dropDownMenuItem}>
                <ul className={styles.subMenuItems}>
                  {items.subItems.map((subItem) => (
                    <li key={subItem.id} className={styles.subItem}>
                      <Link
                        href={subItem.href}
                        className={`${styles.links} ${
                          openSubmenuId === subItem.id &&
                          path?.includes(subItem.id) &&
                          selectedItemId === subItem.id
                            ? styles.selected
                            : ''
                        }`}
                        onClick={(event) => {
                          toggleSubMenu(event, subItem.id);
                          selectMenu(subItem.id);
                        }}
                      >
                        {subItem.label}
                      </Link>
                      {subItem.subItems &&
                        path?.includes(subItem.id) &&
                        path?.endsWith(selectedItemId!) && (
                          <div className={styles.nestedSubItems}>
                            <div className={styles.dropDownMenuItem}>
                              <ul className={styles.nestedSubItem}>
                                {subItem.subItems.map((nestedSubItem) => (
                                  <SubMenu
                                    key={nestedSubItem.id}
                                    items={nestedSubItem}
                                    selectMenu={selectMenu}
                                    selectedItemId={selectedItemId}
                                  />
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default DropdownMenu;
