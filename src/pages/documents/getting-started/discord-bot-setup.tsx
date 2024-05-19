import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { MenuRender } from '@/types/sidebarTypes';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import DiscordBotSetupSection from '@/components/document/pages/discordBotSetup/section';
import { imageUrls } from '@/data/documents/discordBotSetup/images';

const DiscordBotSetupPage = ({ menuItems, imageUrls }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <DiscordBotSetupSection imageUrls={imageUrls} />
      <Pagination previousHref={previousHref} previousLabel={previousLabel} nextHref={nextHref} nextLabel={nextLabel} />
    </DocumentLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      menuItems,
      imageUrls,
    },
  };
};

export default DiscordBotSetupPage;
