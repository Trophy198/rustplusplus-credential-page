import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { MenuRender } from '@/types/sidebarTypes';
import { GetStaticProps } from 'next';
import PairAndConnectToServerSection from '@/components/document/pages/pairAndConnectToServer/section';

const PairAndConnectToServerPage = ({ menuItems }: MenuRender) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <PairAndConnectToServerSection />
      <Pagination previousHref={previousHref} previousLabel={previousLabel} nextHref={nextHref} nextLabel={nextLabel} />
    </DocumentLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menuItems,
    },
  };
};

export default PairAndConnectToServerPage;
