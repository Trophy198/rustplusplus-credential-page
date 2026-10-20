import type { ComponentType } from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import DocumentLayout from '@/components/document/layout';
import Seo from '@/components/seo/seo';
import Heading from '@/components/document/heading/heading';
import Markdown, { renderMarkdown } from '@/components/markdown/markdown';
import { getContent, listContent, toMeta, type ContentMeta } from '@/lib/content';
import { toolsMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

/** Interactive part of each tool, keyed by its content slug. Loaded per page. */
const TOOLS: Record<string, ComponentType> = {
  'power-planner': dynamic(() => import('@/components/tools/powerPlanner/powerPlanner')),
  'upkeep-calculator': dynamic(() => import('@/components/tools/upkeepCalculator/upkeepCalculator')),
};

interface Props {
  meta: ContentMeta;
  source: MDXRemoteSerializeResult;
  menuItems: MenuItem[];
}

const ToolPage = ({ meta, source, menuItems }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Tool = TOOLS[meta.slug];
  return (
    <>
      <Seo title={meta.pageTitle} description={meta.description} />
      <DocumentLayout menuItems={menuItems}>
        <article className={styles.container}>
          <Heading>{meta.pageTitle}</Heading>
          {meta.updated && <p className={styles.updated}>Updated {meta.updated}</p>}
          {Tool && <Tool />}
          <Markdown source={source} />
        </article>
      </DocumentLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: listContent('tools')
    .filter((t) => t.slug in TOOLS)
    .map((t) => ({ params: { slug: t.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const entry = getContent('tools', String(params?.slug));
  if (!entry) return { notFound: true };
  return {
    props: {
      meta: toMeta(entry),
      source: await renderMarkdown(entry.body, entry.format),
      menuItems: toolsMenu(listContent('tools').map(toMeta)),
    },
  };
};

export default ToolPage;
