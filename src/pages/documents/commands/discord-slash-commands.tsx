import DocumentLayout from '@/components/document/layout';
import DiscordSlashCommandsSection from '@/components/document/pages/discordSlashCommands/section';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import { ImageUrls } from '@/data/documents/discordSlashCommands/images';
import usePagination from '@/hooks/usePagination';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const DiscordSlashCommandsPage = ({ menuItems, ImageUrls }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <DiscordSlashCommandsSection imageUrls={ImageUrls} />
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

export default DiscordSlashCommandsPage;
