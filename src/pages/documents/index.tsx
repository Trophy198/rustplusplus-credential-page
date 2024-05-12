import styles from './documents.module.css';
import { GetServerSideProps } from 'next';
import { MenuRender } from '@/types/sidebarTypes';
import menuItems from '@/config/menuItems';
import Layout from '@/components/document/layout';

export const getServerSideProps: GetServerSideProps<MenuRender> = async () => {
  return {
    props: {
      menuItems,
    },
  };
};

const Documents = ({ menuItems }: MenuRender) => {
  return (
    <Layout menuItems={menuItems}>
      <p>Document Page</p>
    </Layout>
  );
};

export default Documents;
