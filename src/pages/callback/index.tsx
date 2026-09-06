import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Spinner from '@/components/loadingCollection/spinner/spinner';
import styles from './callback.module.css';
import axios from 'axios';
import { hasLoginFlagCookie } from '@/lib/authCookie';
import { trackEvent } from '@/lib/gtag';

type Phase = 'loading' | 'cookie-blocked';

const CallbackPage: NextPage = () => {
  const router = useRouter();
  const { token, steamId } = router.query;
  const [phase, setPhase] = useState<Phase>('loading');

  useEffect(() => {
    if (typeof token === 'string' && typeof steamId === 'string') {
      axios
        .get(`/api/callback`, {
          params: {
            token: token,
            steamId: steamId,
          },
        })
        .then((response) => {
          const data = response.data;
          if (!data.success) {
            throw new Error(data.message || 'Unknown error');
          }
          // The server answered 200 with Set-Cookie. If the browser refused to
          // store it, /display would only show an empty error, so check here
          // and explain instead of redirecting.
          if (!hasLoginFlagCookie()) {
            trackEvent('credential_cookie_blocked');
            setPhase('cookie-blocked');
            return;
          }
          window.location.href = '/display';
        })
        .catch((error) => {
          console.error('Failed to process the callback:', error);
          alert(error.message);
          window.location.href = '/';
        });
    }
  }, [token, steamId]);

  if (phase === 'cookie-blocked') {
    return (
      <div className={styles.center}>
        <h1 className={styles.title}>Your credentials were created, but your browser did not save them.</h1>
        <p className={styles.description}>
          This page stores the credentials in a cookie for two weeks. The cookie was rejected, which usually means
          cookies are blocked for this site, you are in a private/incognito window, or a privacy extension removed it.
        </p>
        <ul className={styles.steps}>
          <li>Allow cookies for rustplusplus-credentials.netlify.app (first-party cookies are enough).</li>
          <li>Leave private/incognito mode and disable cookie-blocking extensions for this site.</li>
          <li>Then click Log In again to generate a new credential.</li>
        </ul>
        <Link className={styles.homeLink} href="/">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.center}>
      <h1 className={styles.title}>Creating your credentials, please wait...</h1>
      <Spinner />
    </div>
  );
};

export default CallbackPage;
