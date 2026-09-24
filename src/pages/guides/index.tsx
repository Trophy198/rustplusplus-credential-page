import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import DocumentLayout from '@/components/document/layout';
import Seo from '@/components/seo/seo';
import Heading from '@/components/document/heading/heading';
import Paragraph from '@/components/document/paragraph/paragraph';
import Card from '@/components/document/card/card';
import { listContent, toMeta, type ContentMeta } from '@/lib/content';
import { guidesMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

interface Props {
  guides: ContentMeta[];
  menuItems: MenuItem[];
}

const GuidesIndex = ({ guides, menuItems }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo
      title="Rust+ Troubleshooting Guides: Pairing, Notifications, Server Offline"
      description="Fixes for the Rust+ companion app, sorted by symptom: won't pair, stuck on pairing, server offline, no notifications, sign-in loops, smart alarm problems. Written for players, not server admins."
    />
    <DocumentLayout menuItems={menuItems}>
      <section className={styles.container}>
        <Heading>Rust+ Guides</Heading>
        <Paragraph>
          Practical fixes for the Rust+ companion app and for running it through the rustplusplus Discord bot. Each
          guide starts from the exact message you see on screen, explains what the app is actually doing behind it, and
          gives the checks in the order that finds the cause fastest.
        </Paragraph>
        <div className={styles.gridcontainer}>
          {guides.map((g) => (
            <Card key={g.slug} href={`/guides/${g.slug}`} title={g.title} description={g.description} />
          ))}
        </div>
      </section>
    </DocumentLayout>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const guides = listContent('guides').map(toMeta);
  return { props: { guides, menuItems: guidesMenu(guides) } };
};

export default GuidesIndex;
