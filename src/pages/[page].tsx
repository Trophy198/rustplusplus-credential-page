import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Seo from '@/components/seo/seo';
import Markdown, { renderMarkdown } from '@/components/markdown/markdown';
import Heading from '@/components/document/heading/heading';
import { getContent, listContent, toMeta, type ContentMeta } from '@/lib/content';
import styles from '@/components/document/pages/common.module.css';
import layout from '@/components/document/layout.module.css';

/** Site pages authored in content/pages (about, privacy, terms). */
interface Props {
  meta: ContentMeta;
  source: MDXRemoteSerializeResult;
}

const SitePage = ({ meta, source }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Seo title={`${meta.pageTitle} · rustplusplus`} description={meta.description} />
    <div className={layout.container}>
      <section>
        <article className={styles.container}>
          <Heading>{meta.pageTitle}</Heading>
          {meta.updated && <p className={styles.updated}>Last updated {meta.updated}</p>}
          <Markdown source={source} />
        </article>
      </section>
    </div>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: listContent('pages').map((p) => ({ params: { page: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const entry = getContent('pages', String(params?.page));
  if (!entry) return { notFound: true };
  return { props: { meta: toMeta(entry), source: await renderMarkdown(entry.body, entry.format) } };
};

export default SitePage;
