import { Link } from 'react-scroll';
import Blockquote from '@/components/blockquote/blockquote';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import Paragraph from '../../paragraph/paragraph';
import UnorderedList from '../../unorderedList/unorderedList';
import * as data from '@/data/documents/fcmCredentials/unorderedItems';
import styles from '../common.module.css';
import Image from 'next/image';
import { ImageUrl } from '@/types/imageUrlTypes';
import Code from '../../code/code';

const FcmCredentialsSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>FCM Credentials Documentation</Heading>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link activeClass="active" to="extension-version" smooth={true} duration={500} offset={-89}>
              Extension Version
            </Link>
          </li>
          <li>
            <Link to="exe-version" smooth={true} duration={1000} offset={-89}>
              EXE Version
            </Link>
          </li>
        </ul>
      </nav>
      <Heading2 id="extension-version">Retrieving FCM Credentials Extension Version</Heading2>
      <Heading2>❗️Before You Start</Heading2>
      <Blockquote>
        Make sure you are using <Code>Chrome or Firefox browsers</Code> before starting the credential setup process.
        This is because the web version uses browser extensions to simplify the process, which is more lightweight and
        convenient compared to the relatively heavy .exe application.
      </Blockquote>
      <UnorderedList items={data.getNavigateWebAndExtensionSteps()} />
      <Blockquote>
        <a
          target="_blank"
          href="https://chromewebstore.google.com/detail/rustplusplus-credential-a/ooahmkklkanfgfmphpknpcgdpdcoikhe"
        >
          rustPlusPlus-Credentials Chrome Extension
        </a>
      </Blockquote>
      <Blockquote>
        <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/rustplusplus-credential-app">
          rustPlusPlus-Credentials Firefox Extension
        </a>
      </Blockquote>
      <Image
        className={styles.documentimg}
        src={imageUrls.ClickInstallExtension}
        alt="click_install_extension"
        width={877}
        height={456}
        placeholder="blur"
      />
      <Image
        className={styles.documentimg}
        src={imageUrls.AtferClickInstallExtension}
        alt="after_click_install_extension"
        width={877}
        height={456}
        placeholder="blur"
      />
      <UnorderedList items={data.getWebSteamLoginStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.SteamLoginWeb}
        alt="steam_login_web"
        width={877}
        height={219}
        placeholder="blur"
      />
      <UnorderedList items={data.getRedirectedStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.RustplusplusDisplay}
        alt="rustplusplus_display_page"
        width={877}
        height={456}
        placeholder="blur"
      />
      <UnorderedList items={data.getCopyCredentialsInWebStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.ClickCopyToClipboard}
        alt="click_copy_to_clipboard"
        width={877}
        height={456}
        placeholder="blur"
      />
      <UnorderedList items={data.getPasteCredentialsStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CredentialsDiscord}
        alt="credentials_discord"
        width={877}
        height={96}
        placeholder="blur"
      />
      <UnorderedList items={data.getTeammateRegistrationSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.TeammatesPaired}
        alt="teammates_paired"
        width={455}
        height={320}
        placeholder="blur"
      />
      <Heading2 id="exe-version">Retrieving FCM Credentials EXE Version</Heading2>
      <Blockquote>
        To be able to use an instance of the bot properly, you want to setup your FCM Credentials. Adding these
        credentials makes it possible for you to pair with servers as well as connecting to them.
      </Blockquote>
      <UnorderedList items={data.getDownloadAndInstallSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.FcmCredentialApplicationConnect}
        alt="fcm_credential_application_connect"
        width={657}
        height={850}
        placeholder="blur"
      />
      <UnorderedList items={data.getSteamLoginStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.SteamLogin}
        alt="steam_login"
        width={877}
        height={850}
        placeholder="blur"
      />
      <UnorderedList items={data.getCopyCredentialsSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CredentialsCopy}
        alt="credentials_copy"
        width={657}
        height={850}
        placeholder="blur"
      />
      <UnorderedList items={data.getPasteCredentialsStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CredentialsDiscord}
        alt="credentials_discord"
        width={877}
        height={850}
        placeholder="blur"
      />
      <UnorderedList items={data.getTeammateRegistrationSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.TeammatesPaired}
        alt="teammates_paired"
        width={455}
        height={320}
        placeholder="blur"
      />
      <Heading2>Why are FCM Credentials necessary?</Heading2>
      <Paragraph>FCM Credentials are necessary in order to get the following:</Paragraph>
      <UnorderedList items={data.getFcmUsageBenefits()} />
      <Paragraph>Without these, the bot would not operate properly.</Paragraph>
    </section>
  );
};

export default FcmCredentialsSection;
