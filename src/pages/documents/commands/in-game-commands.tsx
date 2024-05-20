import DocumentLayout from '@/components/document/layout';
import InGameCommandsSection from '@/components/document/pages/in-game-commands/section';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import { ImageUrls } from '@/data/documents/inGameCommands/images';
import usePagination from '@/hooks/usePagination';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const InGameCommandsPage = ({ menuItems, ImageUrls }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <InGameCommandsSection imageUrls={ImageUrls} />
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

export default InGameCommandsPage;
