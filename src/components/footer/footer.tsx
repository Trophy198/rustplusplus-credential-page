import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';
import GitHubIcon from '@/public/icons/github.png';
import DiscordIcon from '@/public/icons/discord.png';

const Footer = () => {
  const gitHubURL: string = 'https://github.com/alexemanuelol/rustplusplus';
  const discordURL: string = 'https://discord.com/invite/vcrKbKVAbc';

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
        <nav className={styles.legalLinks} aria-label="Site">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/docs">Docs</Link>
        </nav>
        <p className={styles.legal}>
          Unofficial credential helper and documentation for{' '}
          <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
            rustplusplus
          </a>{' '}
          by alexemanuelol (GPL-3.0). Not affiliated with Facepunch Studios. Rust and Rust+ are trademarks of Facepunch
          Studios.
        </p>
        <p className={styles.legal}>© {new Date().getFullYear()} rustplusplus-credentials</p>
      </section>
    </footer>
  );
};

export default Footer;
