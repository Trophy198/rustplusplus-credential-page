import type { NextPage } from 'next';
import styles from './mainpage.module.css';
import HeroSection from '@/components/homepage/heroSection';
import FeatureSection from '@/components/homepage/featureSection';
import ExtensionSection from '@/components/homepage/extensionSection';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <FeatureSection />
      <ExtensionSection />
    </div>
  );
};

export default Home;
