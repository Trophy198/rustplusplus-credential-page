import { useState, useEffect } from 'react';
import { MIN_EXTENSION_VERSION } from '@/lib/site';

/** Compare dotted versions numerically: returns true if a < b. */
const isOlder = (a: string, b: string): boolean => {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0;
    const y = pb[i] || 0;
    if (x !== y) return x < y;
  }
  return false;
};

type ExtensionDetectionType = {
  browserType: string;
  isExtensionInstalled: boolean;
  /** Installed but too old for Facepunch's current login flow. */
  isExtensionOutdated: boolean;
  extensionVersion: string | null;
  isLoading: boolean;
};

const useExtensionDetection = (): ExtensionDetectionType => {
  const [browserType, setBrowserType] = useState<string>('');
  const [isExtensionInstalled, setExtensionInstalled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [extensionVersion, setExtensionVersion] = useState<string | null>(null);

  useEffect(() => {
    const detectBrowser = (): string => {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Firefox')) {
        return 'Firefox';
      } else if (userAgent.includes('Chrome')) {
        return 'Chrome';
      }
      return 'Other';
    };

    const browser = detectBrowser();
    setBrowserType(browser);

    let checkCount = 0;
    const maxCheckCount = 10;
    const checkInterval = 100;

    const extensionCheckInterval = setInterval(() => {
      const chromeAddon = document.getElementById('chromeAddon');
      const mozAddon = document.getElementById('mozAddon');
      const beacon = browser === 'Chrome' ? chromeAddon : browser === 'Firefox' ? mozAddon : null;
      if (beacon) {
        setExtensionInstalled(true);
        setExtensionVersion((beacon.textContent || '').trim() || null);
        setIsLoading(false);
        clearInterval(extensionCheckInterval);
      } else if (checkCount >= maxCheckCount) {
        setIsLoading(false);
        clearInterval(extensionCheckInterval);
      }
      checkCount++;
    }, checkInterval);

    return () => clearInterval(extensionCheckInterval);
  }, []);

  const isExtensionOutdated =
    isExtensionInstalled && (!extensionVersion || isOlder(extensionVersion, MIN_EXTENSION_VERSION));

  return { browserType, isExtensionInstalled, isExtensionOutdated, extensionVersion, isLoading };
};

export default useExtensionDetection;
