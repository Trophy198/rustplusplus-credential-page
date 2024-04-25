import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Spinner from '@/components/spinner';
import styles from '@/styles/CallbackPage.module.css';

const CallbackPage: NextPage = () => {
  const router = useRouter();
  const { token, steamId } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof token === 'string' && typeof steamId === 'string') {
      fetch(
        `/api/callback?token=${encodeURIComponent(
          token,
        )}&steamId=${encodeURIComponent(steamId)}`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            router.push('/display');
          } else {
            throw new Error(data.message || 'Unknown error');
          }
        })
        .catch((error) => {
          console.error('Failed to process the callback:', error);
          alert(error.message);
        })
        .finally(() => setLoading(false));
    }
  }, [router, token, steamId]);

  return (
    loading && (
      <div className={styles.center}>
        <h1 className={styles.title}>
          Creating your credentials, please wait...
        </h1>
        <Spinner />
      </div>
    )
  );
};

export default CallbackPage;
