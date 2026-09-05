import { GetServerSideProps, NextPage } from 'next';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import styles from './display.module.css';
import { formatTimeRemaining } from '@/utils/formatTimeRemaining';
import { formatCredentialsData } from '@/utils/formatCredentialsData';
import { trackEvent } from '@/lib/gtag';
import { CONFIG_COOKIE, LOGIN_FLAG_COOKIE } from '@/lib/authCookie';

interface DisplayProps {
  formattedCredentials?: string;
  expire_date?: string;
  error?: string;
}

const Display: NextPage<DisplayProps> = ({ formattedCredentials, expire_date, error }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedCredentials || '');
      trackEvent('credential_copied');
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
  const config = cookies[CONFIG_COOKIE];

  if (!config) {
    return {
      props: { error: 'No configuration data found.' },
    };
  }

  try {
    const credentials = JSON.parse(decodeURIComponent(config));
    const { formattedData, expire_date } = formatCredentialsData(credentials);

    // Credentials issued before the login-flag cookie existed: backfill it so the
    // header shows the logged-in state without an extra API call.
    if (!cookies[LOGIN_FLAG_COOKIE] && expire_date) {
      setCookie(context, LOGIN_FLAG_COOKIE, '1', {
        path: '/',
        sameSite: 'lax',
        secure: true,
        expires: new Date(expire_date * 1000),
      });
    }

    return {
      props: { formattedCredentials: formattedData, expire_date, error: null },
    };
  } catch (error) {
    console.error('Error parsing credentials:', error);
    destroyCookie(context, CONFIG_COOKIE, { path: '/' });
    destroyCookie(context, LOGIN_FLAG_COOKIE, { path: '/' });
    return {
      props: { error: 'Failed to parse configuration data.' },
    };
  }
};
