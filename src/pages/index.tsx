import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isExtensionInstalled, setExtensionInstalled] =
    useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const beacon = document.getElementById('chromeAddon');
      if (beacon) {
        setExtensionInstalled(true);
        clearInterval(interval);
      }
    }, 100);

    setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClickLink = () => {
    setShowMessage(true);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.landingPageTitle}>Rustplusplus-credentials-page</h1>
      <section>
        {!isLoading && (
          <section>
            {isExtensionInstalled ? (
              <a
                className={styles.rustplusplusActionButton}
                href="https://companion-rust.facepunch.com/login"
              >
                Log In
              </a>
            ) : (
              <a
                className={styles.rustplusplusActionButton}
                onClick={handleClickLink}
                href="https://chrome.google.com/webstore/detail/rustplusplus-credential-a/ooahmkklkanfgfmphpknpcgdpdcoikhe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Extension
              </a>
            )}
          </section>
        )}
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
