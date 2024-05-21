import React from 'react';
import styles from './modalBackground.module.css';
import useSidebarStore from '@/store/useSidebarStore';

const ModalBackground: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  if (!isSidebarOpen) return null;

  return <div className={styles.modalBackground} onClick={toggleSidebar}></div>;
};

export default ModalBackground;
