import { GetStaticProps } from 'next';
import { MenuRender } from '@/types/sidebarTypes';
import menuItems from '@/config/menuItems';
import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import DocumentsSection from '@/components/document/pages/documents/section';

const Documents = ({ menuItems }: MenuRender) => {
  return (
    <DocumentLayout menuItems={menuItems}>
      <DocumentsSection />
      <Pagination
        previousHref={null}
        previousLabel={null}
        nextHref={'/documents/getting-started'}
        nextLabel={'Getting Started'}
      />
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

export default Documents;
