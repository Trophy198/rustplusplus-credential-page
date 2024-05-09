import useExtensionDetection from '@/hooks/useExtensionDetection';
import styles from '@/pages/mainpage.module.css';

const ExtensionSection = () => {
  const { browserType } = useExtensionDetection();

  return (
    <section className={styles.extensionSection}>
      <h2 className={styles.extensionTitle}>
        Try all these features for free! &#40;Extension installation is required before starting&#41;
      </h2>
      <a
        className={styles.extensionButton}
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
    </section>
  );
};

export default ExtensionSection;
