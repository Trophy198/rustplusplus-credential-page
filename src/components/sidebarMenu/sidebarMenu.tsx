import Image from 'next/image';
import styles from './sidebarMenu.module.css';
import ArrowRightIcon from '@/public/icons/arrow_right.png';
import useSidebarStore from '@/store/useSidebarStore';

const SidebarMenu = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar}>
        <span>Menu</span>
        <Image
          src={ArrowRightIcon}
          alt="sidebarIcon"
          className={isSidebarOpen ? styles.menuOpen : styles.menuClose}
        ></Image>
      </button>
    </div>
  );
};

export default SidebarMenu;
