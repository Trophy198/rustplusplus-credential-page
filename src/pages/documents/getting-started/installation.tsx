import DocumentLayout from '@/components/document/layout';
import InstallationSection from '@/components/document/pages/installation/section';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { MenuRender } from '@/types/sidebarTypes';
import { GetStaticProps } from 'next';

const InstallationPage = ({ menuItems }: MenuRender) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <InstallationSection />
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

export default InstallationPage;
