import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import DocumentLayout from '@/components/document/layout';
import Heading from '@/components/document/heading/heading';
import Paragraph from '@/components/document/paragraph/paragraph';
import Card from '@/components/document/card/card';
import { listContent, toMeta, type ContentMeta } from '@/lib/content';
import { toolsMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

interface Props {
  tools: ContentMeta[];
  menuItems: MenuItem[];
}

const ToolsIndex = ({ tools, menuItems }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <DocumentLayout menuItems={menuItems}>
    <section className={styles.container}>
      <Heading>Rust Tools</Heading>
      <Paragraph>
        Calculators for the parts of Rust that Rust+ players run into: base electricity first. Every tool runs in your
        browser, shows where its numbers come from, and lets you change the assumptions it makes.
      </Paragraph>
      <div className={styles.gridcontainer}>
        {tools.map((t) => (
          <Card key={t.slug} href={`/tools/${t.slug}`} title={t.title} description={t.description} />
        ))}
      </div>
    </section>
  </DocumentLayout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tools = listContent('tools').map(toMeta);
  return { props: { tools, menuItems: toolsMenu(tools) } };
};

export default ToolsIndex;
