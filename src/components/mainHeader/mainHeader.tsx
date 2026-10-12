import useExtensionDetection from '@/hooks/useExtensionDetection';
import styles from './mainHeader.module.css';
import Link from 'next/link';
import axios from 'axios';
import useAuthStore from '@/store/useAuthStore';
import Dot from '@/components/loadingCollection/dot';
import SidebarMenu from '@/components/sidebarMenu/sidebarMenu';
import { useRouter } from 'next/router';
import { CHROME_STORE_URL, FIREFOX_STORE_URL, LEGACY_LOGIN_URL, RUST_PLUS_LOGIN_URL } from '@/lib/site';

const MainHeader = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const { browserType, isExtensionInstalled, isExtensionOutdated, isLoading } = useExtensionDetection();
  const router = useRouter();

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
      {router.pathname !== '/' ? <SidebarMenu /> : undefined}
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
                    <Link className={styles.rustplusplusActionButton} href="/display">
                      Credential Info
                    </Link>
                    <button className={styles.rustplusplusActionButton} onClick={handleLogout}>
                      Log Out
                    </button>
                  </>
                ) : isExtensionOutdated ? (
                  // Old extensions only understand the pre-October-2026 flow;
                  // keep it reachable for them while the store update rolls out.
                  <a className={styles.rustplusplusActionButton} href={LEGACY_LOGIN_URL}>
                    Log In
                  </a>
                ) : (
                  <a className={styles.rustplusplusActionButton} href={RUST_PLUS_LOGIN_URL}>
                    Log In
                  </a>
                )}
              </>
            ) : (
              <a
                className={styles.rustplusplusActionButton}
                href={browserType === 'Chrome' ? CHROME_STORE_URL : FIREFOX_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Extension
              </a>
            )}
            <Link href="/guides" className={styles.rustplusplusActionButton}>
              Guides
            </Link>
            <Link href="/docs" className={styles.rustplusplusActionButton}>
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
