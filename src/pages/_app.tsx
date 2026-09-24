import useAuthStore from '@/store/useAuthStore';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/mainLayout/mainLayout';
import { GA_ID } from '@/lib/gtag';
import Seo from '@/components/seo/seo';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const fetchLoginStatus = useAuthStore((state) => state.fetchLoginStatus);
  const noHeader = router.pathname === '/callback';

  useEffect(() => {
    fetchLoginStatus();
  }, [fetchLoginStatus]);

  return (
    <>
      <Seo />
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}
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
