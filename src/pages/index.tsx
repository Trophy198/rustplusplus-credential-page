import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isExtensionInstalled, setExtensionInstalled] =
    useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const beacon = document.getElementById('chromeAddon');
      setExtensionInstalled(!!beacon);
      console.log(beacon);
    }
  }, []);

  const handleClickLink = () => {
    setShowMessage(true);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.landingPageTitle}>Rustplusplus-credentials-page</h1>
      <section>
        {isExtensionInstalled ? (
          <a
            className={styles.rustplusplusActionButton}
            href="https://companion-rust.facepunch.com/login"
          >
            Log In
          </a>
        ) : (
          <div>
            <a
              className={styles.rustplusplusActionButton}
              onClick={handleClickLink}
              href="https://chrome.google.com/webstore/detail/rustplusplus-credential-a/ooahmkklkanfgfmphpknpcgdpdcoikhe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Extension
            </a>
          </div>
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
