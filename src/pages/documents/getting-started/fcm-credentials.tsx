import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import FcmCredentialsSection from '@/components/document/pages/fcmCredentials/section';
import { ImageUrls } from '@/data/documents/fcmCredentials/images';

const FCMCredentialsPage = ({ menuItems, ImageUrls }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <FcmCredentialsSection imageUrls={ImageUrls} />
      <Pagination previousHref={previousHref} previousLabel={previousLabel} nextHref={nextHref} nextLabel={nextLabel} />
    </DocumentLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menuItems,
      ImageUrls,
    },
  };
};

export default FCMCredentialsPage;
