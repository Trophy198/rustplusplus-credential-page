import Head from 'next/head';
import { useRouter } from 'next/router';
import { DEFAULT_DESCRIPTION, NOINDEX_PATHS, OG_IMAGE, PAGE_META, SITE_NAME, SITE_URL } from '@/lib/site';

interface SeoProps {
  title?: string;
  description?: string;
  /** Override the canonical URL (e.g. mirrored docs point at their upstream source). */
  canonical?: string;
}

/**
 * Per-page <head> tags. Looks up the current route in PAGE_META; explicit props
 * override. Rendered once from _app so every page gets a unique title,
 * description, canonical URL and Open Graph tags.
 */
const Seo = ({ title, description, canonical: canonicalOverride }: SeoProps) => {
  const { pathname, asPath } = useRouter();
  // asPath resolves dynamic segments; strip query and hash for the canonical.
  const cleanPath = asPath.split(/[?#]/)[0];
  const meta = PAGE_META[pathname];
  const finalTitle = title ?? meta?.title ?? SITE_NAME;
  const finalDescription = description ?? meta?.description ?? DEFAULT_DESCRIPTION;
  const canonical = canonicalOverride ?? `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
  const noindex = NOINDEX_PATHS.has(pathname);

  return (
    <Head>
      <title key="title">{finalTitle}</title>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="description" name="description" content={finalDescription} />
      <link key="canonical" rel="canonical" href={canonical} />
      {noindex && <meta key="robots" name="robots" content="noindex, nofollow" />}
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={finalTitle} />
      <meta key="og:description" property="og:description" content={finalDescription} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:image" property="og:image" content={OG_IMAGE} />
      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:title" name="twitter:title" content={finalTitle} />
      <meta key="twitter:description" name="twitter:description" content={finalDescription} />
      <meta key="twitter:image" name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
};

export default Seo;
