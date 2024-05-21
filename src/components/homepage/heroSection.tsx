import Image from 'next/image';
import MainLogo from '@/public/images/rustplusplusLogo.png';
import InfoLogo from '@/public/images/serverInfoLogo.png';
import SettingsLogo from '@/public/images/settingsLogo.png';
import TeamInfoLogo from '@/public/images/teamInfoLogo.png';
import EventInfoLogo from '@/public/images/eventInfoLogo.png';
import styles from '@/pages/mainpage.module.css';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <Image className={styles.logo} src={MainLogo} width={117} height={107} alt="rustplusplus logo" />
          <h1>
            rustPlusPlus
            <br /> Rust+ Discord Bot
          </h1>
        </div>
        <p className={styles.heroDescription}>
          A NodeJS Discord Bot that uses the rustplus.js library to utilize the power of the Rust+ Companion App with
          additional Quality-of-Life features.
        </p>
        <Link href="/documents" className={styles.startButton}>
          Getting Start
        </Link>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <Image src={InfoLogo} width={100} height={100} alt="Info Logo" className={styles.featureIcon} />
          <p>
            Providing maps, server information, event details, and team member information for the connected Rust
            Server.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={TeamInfoLogo} width={100} height={100} alt="Team Info Logo" className={styles.featureIcon} />
          <p>
            Providing a feature within Discord to communicate with in-game teammates and see their current status
            &#40;AFK, dead, online&#41; and location.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={SettingsLogo} width={100} height={100} alt="Settings Logo" className={styles.featureIcon} />
          <p>
            Providing configuration options in Discord for language and voice gender, in-game command management,
            notifications for in-game teammates, smart alarms, leader permissions, vending machine subscriptions, and
            event notifications.
          </p>
        </div>
        <div className={styles.feature}>
          <Image src={EventInfoLogo} width={100} height={100} alt="Event Info Logo" className={styles.featureIcon} />
          <p>
            Providing a channel for notifications of various events &#40;Cargoship spawn, Cargoship despawn, Cargoship
            enters egress stage, Patrol Helicopter spawn, Patrol Helicopter despawn, Patrol Helicopter destroyed, Locked
            Crate at Oil Rig Unlocked, Oil Rig have been triggered, Chinook 47 spawn, New Vending Machine detected&#41;.
          </p>
        </div>
      </div>
      <Link className={styles.getStartedLink} href="/documents">
        Getting Start
      </Link>
    </section>
  );
};

export default HeroSection;
