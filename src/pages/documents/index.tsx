import { useRouter } from 'next/router';
import styles from './documents.module.css';
import { GetServerSideProps } from 'next';
import { MenuRender } from '@/types/sidebarTypes';
import menuItems from '@/config/menuItems';
import Layout from '@/components/documentComponent/layout';

export const getServerSideProps: GetServerSideProps<MenuRender> = async () => {
  return {
    props: {
      menuItems,
    },
  };
};

const Page = ({ menuItems }: MenuRender) => {
  const router = useRouter();
  const query = router.query;

  return (
    <Layout menuItems={menuItems}>
      <p>Document Page</p>
    </Layout>
  );
};

export default Page;
