import useExtensionDetection from '@/hooks/useExtensionDetection';
import styles from './mainHeader.module.css';
import Link from 'next/link';
import axios from 'axios';
import useAuthStore from '@/store/useAuthStore';
import Dot from '../loadingCollection/dot';

const MainHeader = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const { browserType, isExtensionInstalled, isLoading } =
    useExtensionDetection();

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout');
      if (response.status === 200) {
        setIsLoggedIn(false);
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className={styles.container}>
      <h1>
        <Link className={styles.title} href="/">
          RUST++
        </Link>
      </h1>
      <nav className={styles.buttonContainer}>
        {!isLoading ? (
          <>
            {isExtensionInstalled ? (
              <>
                {isLoggedIn ? (
                  <>
                    <Link
                      className={styles.rustplusplusActionButton}
                      href="/display"
                    >
                      Credential Info
                    </Link>
                    <button
                      className={styles.rustplusplusActionButton}
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <a
                    className={styles.rustplusplusActionButton}
                    href="https://companion-rust.facepunch.com/login"
                  >
                    Log In
                  </a>
                )}
              </>
            ) : (
              <a
                className={styles.rustplusplusActionButton}
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
            )}
            <Link className={styles.rustplusplusActionButton} href="/documents">
              Docs
            </Link>
          </>
        ) : (
          <div className={styles.loadingContainer}>
            <Dot />
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
