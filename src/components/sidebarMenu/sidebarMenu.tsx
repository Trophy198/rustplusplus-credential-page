import Image from 'next/image';
import styles from './sidebarMenu.module.css';
import ArrowRightIcon from './../../../public/icons/arrow_right.png';
import ArrowLeftIcon from './../../../public/icons/arrow_Left.png';
import useSidebarStore from '@/store/useSidebarStore';

const SidebarMenu = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar}>
        <Image
          src={isSidebarOpen ? ArrowLeftIcon : ArrowRightIcon}
          alt="sidebarIcon"
          placeholder="blur"
          width={17}
        ></Image>
        <span>Menu</span>
      </button>
    </div>
  );
};

export default SidebarMenu;
