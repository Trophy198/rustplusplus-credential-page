import Image from 'next/image';
import styles from './sidebarMenu.module.css';
import useSidebarStore from '@/store/useSidebarStore';
import SidebarMenuIcon from '@/public/icons/barsSolid.svg';

const SidebarMenu = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <>
      <button onClick={toggleSidebar} className={styles.sidebarButton}>
        <Image src={SidebarMenuIcon} alt="sidebarIcon" aria-label="sidebarIcon" width={32} height={32} />
      </button>
    </>
  );
};

export default SidebarMenu;
