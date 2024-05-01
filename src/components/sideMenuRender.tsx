import Link from '../../node_modules/next/link';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  subItems?: MenuItem[];
}

interface MenuRender {
  items: MenuItem[];
}

const SideMenuRender = ({ items }: MenuRender) => {
  return (
    <div>
      {items.map((item) => (
        <ul key={item.id}>
          <li>
            <Link href={item.href} passHref>
              {item.label}
            </Link>
            {item.subItems && (
              <div>
                <SideMenuRender items={item.subItems} />
              </div>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SideMenuRender;
