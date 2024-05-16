import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { MenuRender } from '@/types/sidebarTypes';
import { GetStaticProps } from 'next';

const GettingStartedPage = ({ menuItems }: MenuRender) => {
  const { nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <h1>Getting Started Page</h1>
      <Pagination previousHref={'/documents'} previousLabel={'Documents'} nextHref={nextHref} nextLabel={nextLabel} />
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

export default GettingStartedPage;
