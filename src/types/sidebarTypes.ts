export interface MenuItem {
  id: string;
  label: string;
  href: string;
  subItems?: MenuItem[];
}

export interface MenuRender {
  menuItems: MenuItem[];
}

export interface Props {
  items: MenuItem;
}