import { useState, useEffect } from 'react';

type ExtensionDetectionType = {
  browserType: string;
  isExtensionInstalled: boolean;
  isLoading: boolean;
};

const useExtensionDetection = (): ExtensionDetectionType => {
  const [browserType, setBrowserType] = useState<string>('');
  const [isExtensionInstalled, setExtensionInstalled] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

    return () => clearInterval(extensionCheckInterval);
  }, []);

  return { browserType, isExtensionInstalled, isLoading };
};

export default useExtensionDetection;
