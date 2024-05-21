import Heading from '@/components/document/heading/heading';
import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import menuItems from '@/config/menuItems';
import usePagination from '@/hooks/usePagination';
import { MenuRender } from '@/types/sidebarTypes';
import { GetStaticProps } from 'next';
import { discordTextChannelsData } from '@/data/documents/discordTextChannels/discordTextChannelsData';
import DiscordTextChannelsSection from '@/components/document/pages/discordTextChannels/discordTextChannelsSection';
import styles from '@/components/document/pages/common.module.css';

const DiscordTextChannelsPage = ({ menuItems }: MenuRender) => {
  const { previousHref, previousLabel, nextHref, nextLabel } = usePagination();

  return (
    <DocumentLayout menuItems={menuItems}>
      <section className={styles.container}>
        <Heading>Discord Text Channels</Heading>
        {discordTextChannelsData.map((section, index) => (
          <DiscordTextChannelsSection key={index} {...section} />
        ))}
      </section>
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

export default DiscordTextChannelsPage;
