import useExtensionDetection from '@/hooks/useExtensionDetection';
import { CHROME_STORE_URL, FIREFOX_STORE_URL, MIN_EXTENSION_VERSION } from '@/lib/site';
import styles from '../mobileNotice/mobileNotice.module.css';

/**
 * Facepunch reworked the Rust+ login in October 2026. Extensions older than
 * MIN_EXTENSION_VERSION cannot capture the new result, so the login ends on
 * rust.facepunch.com/companion. Tell those users to update.
 */
const ExtensionNotice = () => {
  const { isExtensionOutdated, extensionVersion, browserType, isLoading } = useExtensionDetection();
  if (isLoading || !isExtensionOutdated) return null;

  const store = browserType === 'Firefox' ? FIREFOX_STORE_URL : CHROME_STORE_URL;
  return (
    <aside className={styles.notice} role="note">
      <strong>Update the rustplusplus extension.</strong> Facepunch changed the Rust+ login in October 2026. Your
      extension{extensionVersion ? ` (${extensionVersion})` : ''} predates that, so logging in may end on
      Facepunch&apos;s Rust+ page instead of returning here. Version {MIN_EXTENSION_VERSION} or newer fixes it:{' '}
      <a href={store} target="_blank" rel="noopener noreferrer">
        open the store page
      </a>
      . Browsers update extensions automatically within a day; in Chrome you can force it from{' '}
      <code>chrome://extensions</code> with Developer mode on and the Update button.
    </aside>
  );
};

export default ExtensionNotice;
