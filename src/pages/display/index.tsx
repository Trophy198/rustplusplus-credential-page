import { GetServerSideProps, NextPage } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { formatCredentialsData } from '@/utils/formatCredentialsData';
import styles from './display.module.css';
import { formatTimeRemaining } from '@/utils/formatTimeRemaining';

interface DisplayProps {
  formattedCredentials?: string;
  expire?: string;
  error?: string;
}

/**
 * todo : add expire in credentials
 */
const Display: NextPage<DisplayProps> = ({ formattedCredentials, expire, error }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedCredentials || '');
      alert('Credentials copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy credentials:', err);
      alert('Failed to copy credentials. Please try again.');
    }
  };

  const timeRemaining = expire ? formatTimeRemaining(parseInt(expire)) : null;

  return (
    <div className={styles.container}>
      {error ? (
        <div className={styles.errorContainer}>
          <h3>Error: {error}</h3>
        </div>
      ) : (
        <>
          <h1 className={styles.pageTitle}>Credential Info</h1>
          <div className={styles.credentialsContainer}>
            <pre className={styles.credentialsPre}>{formattedCredentials}</pre>
            <button className={styles.copyButton} onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
          </div>
          {timeRemaining && (
            <div className={styles.statusContainer}>
              <h2 className={styles.statusTitle}>
                Status: <span className={styles.statusIndicatorText}>Active</span>
                <span className={`${styles.statusIndicator} ${styles.active}`}></span>
              </h2>
              <p className={styles.expireText}>Expires in: {timeRemaining}</p>
            </div>
          )}
        </>
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
    const credentials = JSON.parse(decodeURIComponent(config));
    const { formattedData, expire } = formatCredentialsData(credentials);
    return {
      props: { formattedCredentials: formattedData, expire, error: null },
    };
  } catch (error) {
    console.error('Error parsing credentials:', error);
    destroyCookie(context, 'config');
    return {
      props: { error: 'Failed to parse configuration data.' },
    };
  }
};
