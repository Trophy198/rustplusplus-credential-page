import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import DocumentLayout from '@/components/document/layout';
import Pagination from '@/components/pagination/pagination';
import Seo from '@/components/seo/seo';
import Markdown, { renderMarkdown } from '@/components/markdown/markdown';
import Heading from '@/components/document/heading/heading';
import { getContent, listContent, neighbors, toMeta, type ContentMeta, type Neighbor } from '@/lib/content';
import { guidesMenu } from '@/lib/menu';
import type { MenuItem } from '@/types/sidebarTypes';
import styles from '@/components/document/pages/common.module.css';

interface Props {
  meta: ContentMeta;
  source: MDXRemoteSerializeResult;
  menuItems: MenuItem[];
  prev: Neighbor | null;
  next: Neighbor | null;
}

const GuidePage = ({ meta, source, menuItems, prev, next }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo title={meta.pageTitle} description={meta.description} />
    <DocumentLayout menuItems={menuItems}>
      <article className={styles.container}>
        <Heading>{meta.pageTitle}</Heading>
        {meta.updated && <p className={styles.updated}>Updated {meta.updated}</p>}
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
  paths: listContent('guides').map((g) => ({ params: { slug: g.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug);
  const entry = getContent('guides', slug);
  if (!entry) return { notFound: true };
  const all = listContent('guides').map(toMeta);
  const { prev, next } = neighbors(all, slug, '/guides', 'All guides');
  return {
    props: {
      meta: toMeta(entry),
      source: await renderMarkdown(entry.body, entry.format),
      menuItems: guidesMenu(all),
      prev,
      next,
    },
  };
};

export default GuidePage;
