import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import DocumentLayout from '@/components/document/layout';
import Seo from '@/components/seo/seo';
import Heading from '@/components/document/heading/heading';
import Markdown, { renderMarkdown } from '@/components/markdown/markdown';
import PowerPlanner from '@/components/tools/powerPlanner/powerPlanner';
import { getContent, listContent, toMeta, type ContentMeta } from '@/lib/content';
import { toolsMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

const SLUG = 'power-planner';

interface Props {
  meta: ContentMeta;
  source: MDXRemoteSerializeResult;
  menuItems: MenuItem[];
}

const PowerPlannerPage = ({ meta, source, menuItems }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo title={meta.pageTitle} description={meta.description} />
    <DocumentLayout menuItems={menuItems}>
      <article className={styles.container}>
        <Heading>{meta.pageTitle}</Heading>
        {meta.updated && <p className={styles.updated}>Updated {meta.updated}</p>}
        <PowerPlanner />
        <Markdown source={source} />
      </article>
    </DocumentLayout>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entry = getContent('tools', SLUG);
  if (!entry) return { notFound: true };
  return {
    props: {
      meta: toMeta(entry),
      source: await renderMarkdown(entry.body, entry.format),
      menuItems: toolsMenu(listContent('tools').map(toMeta)),
    },
  };
};

export default PowerPlannerPage;
