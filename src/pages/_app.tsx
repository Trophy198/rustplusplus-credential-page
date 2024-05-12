import useAuthStore from '@/store/useAuthStore';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/mainLayout/mainLayout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const fetchLoginStatus = useAuthStore((state) => state.fetchLoginStatus);
  const noHeader = router.pathname === '/callback';

  useEffect(() => {
    fetchLoginStatus();
  }, [fetchLoginStatus]);

  const siteUrl = 'https://rustplusplus-credentials.netlify.app';
  const logoUrl = `${siteUrl}/images/rustplusplusLogo.png`;

  return (
    <>
      <Head>
        <title>rustplusplus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="rustPlusPlus Page" />

        <meta property="og:title" content="rustPlusPlus" />
        <meta
          property="og:description"
          content="Enhance your Rust experience with rustPlusPlus. Get maps, server information, event details, and more."
        />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="rustPlusPlus" />
        <meta
          name="twitter:description"
          content="Enhance your Rust experience with rustPlusPlus. Get maps, server information, event details, and more."
        />
        <meta name="twitter:image" content={logoUrl} />
      </Head>
      {noHeader ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}
