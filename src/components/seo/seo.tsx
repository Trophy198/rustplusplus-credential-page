import Head from 'next/head';
import { useRouter } from 'next/router';
import { DEFAULT_DESCRIPTION, NOINDEX_PATHS, OG_IMAGE, PAGE_META, SITE_NAME, SITE_URL } from '@/lib/site';

interface SeoProps {
  title?: string;
  description?: string;
}

/**
 * Per-page <head> tags. Looks up the current route in PAGE_META; explicit props
 * override. Rendered once from _app so every page gets a unique title,
 * description, canonical URL and Open Graph tags.
 */
const Seo = ({ title, description }: SeoProps) => {
  const { pathname } = useRouter();
  const meta = PAGE_META[pathname];
  const finalTitle = title ?? meta?.title ?? SITE_NAME;
  const finalDescription = description ?? meta?.description ?? DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const noindex = NOINDEX_PATHS.has(pathname);

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
};

export default Seo;
