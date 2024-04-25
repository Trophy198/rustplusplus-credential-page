import { GetServerSideProps, NextPage } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { formatCredentialsData } from '@/utils/formatCredentialsData';
import styles from '@/styles/Display.module.css';

interface Credentials {
  fcm_credentials: {
    fcm: {
      token: string;
      pushSet: string;
    };
    gcm: {
      token: string;
      androidId: string;
      securityToken: string;
      appId: string;
    };
    keys: {
      privateKey: string;
      publicKey: string;
      authSecret: string;
    };
  };
  steamId: string;
}

interface DisplayProps {
  formattedCredentials?: string;
  error?: string;
}

const Display: NextPage<DisplayProps> = ({ formattedCredentials, error }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedCredentials || '');
      alert('Credentials copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy credentials:', err);
      alert('Failed to copy credentials. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Configuration Data</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <pre className={styles.pre}>{formattedCredentials}</pre>
          <button className={styles.button} onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Display;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const config = cookies.config;

  if (!config) {
    return {
      props: { error: 'No configuration data found.' },
    };
  }

  try {
    const credentials: Credentials = JSON.parse(decodeURIComponent(config));
    const formattedCredentials = formatCredentialsData(credentials);
    return {
      props: { formattedCredentials },
    };
  } catch (error) {
    console.error('Error parsing credentials:', error);
    destroyCookie(context, 'config');
    return {
      props: { error: 'Failed to parse configuration data.' },
    };
  }
};
