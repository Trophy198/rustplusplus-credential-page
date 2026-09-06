import { GetServerSideProps, NextPage } from 'next';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import Link from 'next/link';
import styles from './display.module.css';
import { formatTimeRemaining } from '@/utils/formatTimeRemaining';
import { formatCredentialsData } from '@/utils/formatCredentialsData';
import { trackEvent } from '@/lib/gtag';
import { CONFIG_COOKIE, LOGIN_FLAG_COOKIE } from '@/lib/authCookie';

interface DisplayProps {
  formattedCredentials?: string;
  expire_date?: string;
  error?: string;
  /** True when the request carried no credential cookie at all. */
  noCredential?: boolean;
}

const Display: NextPage<DisplayProps> = ({ formattedCredentials, expire_date, error, noCredential }) => {
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
      {noCredential ? (
        <section className={styles.emptyState}>
          <h1 className={styles.pageTitle}>No credential found</h1>
          <p>
            This page shows your Rust+ credential after you log in. Nothing is stored for this browser right now, which
            happens when you have not logged in yet, logged out, your credential expired (they last two weeks), or your
            browser did not keep the cookie.
          </p>
          <ol className={styles.emptySteps}>
            <li>Install the browser extension if the header does not show a Log In button.</li>
            <li>Click Log In and sign in with Steam.</li>
            <li>You will be sent back here with your /credentials command.</li>
          </ol>
          <div className={styles.emptyActions}>
            <Link className={styles.copyButton} href="/">
              Go to home
            </Link>
            <Link className={styles.secondaryLink} href="/documents/getting-started/fcm-credentials">
              Read the credential guide
            </Link>
          </div>
        </section>
      ) : error ? (
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
    // A stale login flag without the credential cookie would keep showing the
    // "Credential Info" button; clear it so the header falls back to Log In.
    if (cookies[LOGIN_FLAG_COOKIE]) {
      destroyCookie(context, LOGIN_FLAG_COOKIE, { path: '/' });
    }
    return {
      props: { noCredential: true },
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
