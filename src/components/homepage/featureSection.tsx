import { useRef } from 'react';
import Image from 'next/image';
import styles from '@/pages/mainpage.module.css';
import Information from '@/public/images/serverInformation.png';
import TeamChat from '@/public/images/teamchat.png';
import EventNotifications from '@/public/images/eventNotifications.png';
import SmartSwitch from '@/public/images/smartSwitch.png';
import Activity from '@/public/images/activity.png';
import Trackers from '@/public/images/trackersChannel.png';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const FeatureSection = () => {
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  useIntersectionObserver(
    sectionRefs,
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.visible);
      }
    },
    { threshold: 0.7 },
  );

  return (
    <>
      <section ref={sectionRefs[0]} className={styles.section}>
        <div className={styles.sectionImg}>
          <Image src={Information} alt="server information" />
        </div>
        <div className={styles.sectionText}>
          <h2>Information</h2>
          <p>
            Check the map, players, in-game time, event information, and team member details and status of the currently
            connected server in Discord!
          </p>
        </div>
      </section>
      <section ref={sectionRefs[1]} className={styles.section}>
        <div className={styles.sectionText}>
          <h2>Team Chat</h2>
          <p>Check in-game chat and write in-game chat from within Discord!</p>
        </div>
        <div className={styles.sectionImg}>
          <Image src={TeamChat} alt="TeamChat" />
        </div>
      </section>
      <section ref={sectionRefs[2]} className={styles.section}>
        <div className={styles.sectionImg}>
          <Image src={EventNotifications} alt="EventNotifications" />
        </div>
        <div className={styles.sectionText}>
          <h2>Game Event</h2>
          <p>
            Check out all in-game events &#40;Cargoship spawn, Cargoship despawn, Cargoship enters egress stage, Patrol
            Helicopter spawn, Patrol Helicopter despawn, Patrol Helicopter destroyed, Locked Crate at Oil Rig unlocked,
            Oil Rig triggered, Chinook 47 spawn, New Vending Machine detected&#41; in the Discord event channel!
          </p>
        </div>
      </section>
      <section ref={sectionRefs[3]} className={styles.section}>
        <div className={styles.sectionText}>
          <h2>Smart Switch</h2>
          <p>
            Use the pairing function of the in-game Smart Switch to check its status and information in the Discord
            channel! Also, create custom commands to change the status of the Smart Switch in-game!
          </p>
        </div>
        <div className={styles.sectionImg}>
          <Image src={SmartSwitch} alt="Smart Switch" />
        </div>
      </section>
      <section ref={sectionRefs[4]} className={styles.section}>
        <div className={styles.sectionImg}>
          <Image width={475} height={309} src={Activity} alt="Activity" />
        </div>
        <div className={styles.sectionText}>
          <h2>Activity</h2>
          <p>
            Check various activity information in Discord, including server wipe detection, the online/offline status of
            team members, the server&apos;s online/offline status, and the status of Smart Switches!
          </p>
        </div>
      </section>
      <section ref={sectionRefs[5]} className={styles.section}>
        <div className={styles.sectionText}>
          <h2>Trackers</h2>
          <p>
            Add a player&apos;s SteamID from the connected server to check how many hours they have been online, whether
            they are currently online or offline, and notify team members about what the player is currently doing!
            &#40;with BattleMetrics&#41;
          </p>
        </div>
        <div className={styles.sectionImg}>
          <Image width={400} priority src={Trackers} alt="Trackers" />
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
