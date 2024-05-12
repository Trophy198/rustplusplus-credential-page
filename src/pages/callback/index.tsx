import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Spinner from '@/components/loadingCollection/spinner/spinner';
import styles from './callback.module.css';
import axios from 'axios';

const CallbackPage: NextPage = () => {
  const router = useRouter();
  const { token, steamId } = router.query;
  const [loading, setLoading] = useState(true);

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
          if (data.success) {
            window.location.href = '/display';
          } else {
            throw new Error(data.message || 'Unknown error');
          }
        })
        .catch((error) => {
          console.error('Failed to process the callback:', error);
          alert(error.message);
          window.location.href = '/';
        })
        .finally(() => setLoading(false));
    }
  }, [token, steamId]);

  return (
    loading && (
      <div className={styles.center}>
        <h1 className={styles.title}>Creating your credentials, please wait...</h1>
        <Spinner />
      </div>
    )
  );
};

export default CallbackPage;
