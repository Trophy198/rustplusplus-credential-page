import { GetServerSideProps, NextPage } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { formatCredentialsData } from '@/utils/formatCredentialsData';
import styles from './display.module.css';
import { formatTimeRemaining } from '@/utils/formatTimeRemaining';

interface DisplayProps {
  formattedCredentials?: string;
  expire_date?: string;
  error?: string;
}

const Display: NextPage<DisplayProps> = ({ formattedCredentials, expire_date, error }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedCredentials || '');
      alert('Credentials copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy credentials:', err);
      alert('Failed to copy credentials. Please try again.');
    }
  };

  const timeRemaining = expire_date ? formatTimeRemaining(parseInt(expire_date)) : null;

  return (
    <article className={styles.container}>
      {error ? (
        <section className={styles.errorContainer}>
          <h3>Error: {error}</h3>
        </section>
      ) : (
        <>
          <header>
            <h1 className={styles.pageTitle}>Credential Info</h1>
          </header>
          <section className={styles.credentialsContainer}>
            <pre className={styles.credentialsPre}>{formattedCredentials}</pre>
            <button className={styles.copyButton} onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
          </section>
          {timeRemaining && (
            <section className={styles.statusContainer}>
              <h2 className={styles.statusTitle}>
                Status: <span className={styles.statusIndicatorText}>Active</span>
                <span className={`${styles.statusIndicator} ${styles.active}`}></span>
              </h2>
              <div className={styles.expireContainer}>
                <p className={styles.expireText}>Expires in: {timeRemaining}</p>
                <div className={styles.popoverContainer}>
                  <span className={styles.questionIcon}>?</span>
                  <div className={styles.popover}>
                    According to the flow of Rust+, the credentials are used for 2 weeks and then discarded. Therefore,
                    an expiration date is set accordingly.
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </article>
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
    const { formattedData, expire_date } = formatCredentialsData(credentials);
    return {
      props: { formattedCredentials: formattedData, expire_date, error: null },
    };
  } catch (error) {
    console.error('Error parsing credentials:', error);
    destroyCookie(context, 'config');
    return {
      props: { error: 'Failed to parse configuration data.' },
    };
  }
};
