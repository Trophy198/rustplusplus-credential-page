import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import Heading from '@/components/document/heading/heading';
import Paragraph from '@/components/document/paragraph/paragraph';
import Card from '@/components/document/card/card';
import { listContent, toMeta, type ContentMeta } from '@/lib/content';
import { docsMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

interface Props {
  docs: ContentMeta[];
  menuItems: MenuItem[];
  synced: string | null;
}

const DocsIndex = ({ docs, menuItems, synced }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <DocumentLayout menuItems={menuItems}>
    <section className={styles.container}>
      <Heading>rustplusplus Documentation</Heading>
      <Paragraph>
        rustplusplus is a free, open-source Discord bot that brings the Rust+ companion app into your Discord server:
        server status, team chat, smart switches, alarms, storage monitors, trackers and dozens of commands. Every team
        member runs their own bot instance, and this site helps you set it up.
      </Paragraph>
      <Paragraph>
        Start with Installation, create the Discord bot, generate your credentials with the browser extension, then pair
        a server. The pages below are the official documentation from the rustplusplus repository, mirrored here
        {synced ? ` (last synced ${synced})` : ''} so they stay current with the bot.
      </Paragraph>
      <div className={styles.gridcontainer}>
        {docs.map((d) => (
          <Card key={d.slug} href={`/docs/${d.slug}`} title={d.title} description={d.description} />
        ))}
      </div>
    </section>
    <Pagination
      previousHref={null}
      previousLabel={null}
      nextHref={docs[0] ? `/docs/${docs[0].slug}` : null}
      nextLabel={docs[0]?.title ?? null}
    />
  </DocumentLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const docs = listContent('docs').map(toMeta);
  const synced = docs.find((d) => d.syncedAt)?.syncedAt?.slice(0, 10) ?? null;
  return { props: { docs, menuItems: docsMenu(docs), synced } };
};

export default DocsIndex;
