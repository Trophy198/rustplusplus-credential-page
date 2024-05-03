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

  return (
    <>
      <Head>
        <title>rustplusplus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="rustPlusPlus Page" />
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
