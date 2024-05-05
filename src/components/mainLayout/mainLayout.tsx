import { ReactNode } from 'react';
import styles from './mainLayout.module.css';
import MainHeader from '../mainHeader/mainHeader';
import Footer from '../footer/footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
