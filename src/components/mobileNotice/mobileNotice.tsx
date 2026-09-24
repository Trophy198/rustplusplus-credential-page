import { useEffect, useState } from 'react';
import styles from './mobileNotice.module.css';

/**
 * The credential flow needs a desktop browser extension. Mobile visitors
 * (about 10% of traffic) cannot complete it, so tell them up front instead of
 * letting them bounce at the missing Log In button.
 */
const MobileNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    setShow(isMobile);
  }, []);

  if (!show) return null;

  return (
    <aside className={styles.notice} role="note">
      <strong>Heads up:</strong> credentials can only be generated on a desktop browser (Chrome or Firefox with the
      extension). You can still read the guides here, then open this page on your PC.
    </aside>
  );
};

export default MobileNotice;
