import { ReactNode } from 'react';
import styles from './mainLayout.module.css';
import MainHeader from '../mainHeader/mainHeader';
import Footer from '../footer/footer';
import MobileNotice from '../mobileNotice/mobileNotice';
import ExtensionNotice from '../extensionNotice/extensionNotice';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <MainHeader />
      <main>
        <MobileNotice />
        <ExtensionNotice />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
