import Image from 'next/image';
import styles from './footer.module.css';
import GitHubIcon from './../../../public/icons/github.png';
import DiscordIcon from './../../../public/icons/discord.png';

const Footer = () => {
  const gitHubURL: string = 'https://github.com/alexemanuelol/rustplusplus';
  const discordURL: string = 'https://discord.com/invite/vcrKbKVAbc';
  const privacyPolicyURL: string =
    'https://sites.google.com/view/rustplusplus-privacy-policy/%ED%99%88';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerImage}>
        <a href={gitHubURL} target="_blank">
          <Image
            src={GitHubIcon}
            alt="github install link"
            placeholder="blur"
            width={45}
            height={45}
          />
        </a>
        <a href={discordURL} target="_blank">
          <Image
            src={DiscordIcon}
            alt="discord community link"
            placeholder="blur"
            width={45}
            height={45}
          />
        </a>
      </div>
      <div className={styles.footerText}>
        <p>
          <a href={privacyPolicyURL} target="_blank">
            Privacy Policy
          </a>
        </p>
        <p>Copyright ©2024 RUSTPLUSPLUS Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
