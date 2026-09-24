import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import Seo from '@/components/seo/seo';
import Markdown, { renderMarkdown } from '@/components/markdown/markdown';
import SourceNote from '@/components/document/sourceNote/sourceNote';
import Heading from '@/components/document/heading/heading';
import { getContent, listContent, neighbors, toMeta, type ContentMeta, type Neighbor } from '@/lib/content';
import { docsMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

interface Props {
  meta: ContentMeta;
  source: MDXRemoteSerializeResult;
  menuItems: MenuItem[];
  prev: Neighbor | null;
  next: Neighbor | null;
}

const DocPage = ({ meta, source, menuItems, prev, next }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo
      title={`${meta.pageTitle} · rustplusplus`}
      description={meta.description}
      // Mirrored docs point their canonical at the upstream file: we are a
      // convenience copy, not the origin.
      canonical={meta.upstream}
    />
    <DocumentLayout menuItems={menuItems}>
      <article className={styles.container}>
        <Heading>{meta.pageTitle}</Heading>
        <SourceNote meta={meta} />
        <Markdown source={source} />
      </article>
      <Pagination
        previousHref={prev?.href ?? null}
        previousLabel={prev?.label ?? null}
        nextHref={next?.href ?? null}
        nextLabel={next?.label ?? null}
      />
    </DocumentLayout>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: listContent('docs').map((d) => ({ params: { slug: d.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug);
  const entry = getContent('docs', slug);
  if (!entry) return { notFound: true };
  const all = listContent('docs').map(toMeta);
  const { prev, next } = neighbors(all, slug, '/docs', 'Documentation');
  return {
    props: {
      meta: toMeta(entry),
      source: await renderMarkdown(entry.body, entry.format),
      menuItems: docsMenu(all),
      prev,
      next,
    },
  };
};

export default DocPage;
