import Image from 'next/image';
import styles from './footer.module.css';
import GitHubIcon from '@/public/icons/github.png';
import DiscordIcon from '@/public/icons/discord.png';

const Footer = () => {
  const gitHubURL: string = 'https://github.com/alexemanuelol/rustplusplus';
  const discordURL: string = 'https://discord.com/invite/vcrKbKVAbc';
  const privacyPolicyURL: string = 'https://sites.google.com/view/rustplusplus-privacy-policy/%ED%99%88';

  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <ul>
          <li>
            <a href={gitHubURL} target="_blank">
              <Image src={GitHubIcon} alt="github install link" placeholder="blur" className={styles.footerImage} />
            </a>
          </li>
          <li>
            <a href={discordURL} target="_blank" rel="noopener noreferrer">
              <Image src={DiscordIcon} alt="discord community link" placeholder="blur" className={styles.footerImage} />
            </a>
          </li>
        </ul>
      </nav>
      <section className={styles.footerSection}>
        <a href={privacyPolicyURL} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <p>Copyright ©2024 RUSTPLUSPLUS Inc. All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
