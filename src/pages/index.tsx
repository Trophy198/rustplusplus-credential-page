import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [browserType, setBrowserType] = useState('');
  const [isExtensionInstalled, setExtensionInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let browser;
    if (userAgent.includes('Firefox')) {
      browser = 'Firefox';
    } else if (userAgent.includes('Chrome')) {
      browser = 'Chrome';
    } else {
      browser = 'Other';
    }
    setBrowserType(browser);

    let checkCount = 0;
    const maxCheckCount = 10;
    const checkInterval = 100;

    const extensionCheckInterval = setInterval(() => {
      const chromeAddon = document.getElementById('chromeAddon');
      const mozAddon = document.getElementById('mozAddon');
      if (
        (browser === 'Chrome' && chromeAddon) ||
        (browser === 'Firefox' && mozAddon)
      ) {
        setExtensionInstalled(true);
        setIsLoading(false);
        clearInterval(extensionCheckInterval);
      } else if (checkCount >= maxCheckCount) {
        setIsLoading(false);
        clearInterval(extensionCheckInterval);
      }
      checkCount++;
    }, checkInterval);

    return () => {
      clearInterval(extensionCheckInterval);
    };
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.landingPageTitle}>Rustplusplus-credentials-page</h1>
      <section>
        {!isLoading &&
          (isExtensionInstalled ? (
            <a
              className={styles.rustplusplusActionButton}
              href="https://companion-rust.facepunch.com/login"
            >
              Log In
            </a>
          ) : (
            <a
              className={styles.rustplusplusActionButton}
              onClick={() => setShowMessage(true)}
              href={
                browserType === 'Chrome'
                  ? 'https://chrome.google.com/webstore/detail/rustplusplus-credential-a/ooahmkklkanfgfmphpknpcgdpdcoikhe'
                  : 'https://addons.mozilla.org/en-US/firefox/addon/rustplusplus-credential-app/'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Extension
            </a>
          ))}
      </section>
      {showMessage && (
        <aside className={styles.installMessage}>
          If you have installed the extension and still see &quot;Install
          Extension,&quot; please refresh the page!
        </aside>
      )}
    </main>
  );
};

export default Home;
