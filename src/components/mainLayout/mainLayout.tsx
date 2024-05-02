import { ReactNode } from 'react';
import MainHeader from '../mainHeader/mainHeader';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
