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
            <Link activeClass="active" to="extension-version" smooth={true} duration={500} offset={-105}>
              Extension Version
            </Link>
          </li>
          <li>
            <Link to="exe-version" smooth={true} duration={1000} offset={-105}>
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
      <Image src={imageUrls.ClickInstallExtension} alt="click-install-extension" placeholder="blur" />
      <Image src={imageUrls.AtferClickInstallExtension} alt="after-click-install-extension" placeholder="blur" />
      <UnorderedList items={data.getWebSteamLoginStep()} />
      <Image src={imageUrls.SteamLoginWeb} alt="steam-login-web" placeholder="blur" />
      <UnorderedList items={data.getRedirectedStep()} />
      <Image src={imageUrls.RustplusplusDisplay} alt="rustplusplus-display-page" placeholder="blur" />
      <UnorderedList items={data.getCopyCredentialsInWebStep()} />
      <Image src={imageUrls.ClickCopyToClipboard} alt="click-copy-to-clipboard" placeholder="blur" />
      <UnorderedList items={data.getPasteCredentialsStep()} />
      <Image src={imageUrls.CredentialsDiscord} alt="credentials-discord" placeholder="blur" />
      <UnorderedList items={data.getTeammateRegistrationSteps()} />
      <Image src={imageUrls.TeammatesPaired} alt="teammates-paired" placeholder="blur" />
      <Heading2 id="exe-version">Retrieving FCM Credentials EXE Version</Heading2>
      <Blockquote>
        To be able to use an instance of the bot properly, you want to setup your FCM Credentials. Adding these
        credentials makes it possible for you to pair with servers as well as connecting to them.
      </Blockquote>
      <UnorderedList items={data.getDownloadAndInstallSteps()} />
      <Image
        src={imageUrls.FcmCredentialApplicationConnect}
        alt="fcm-credential-application-connect"
        placeholder="blur"
      />
      <UnorderedList items={data.getSteamLoginStep()} />
      <Image src={imageUrls.SteamLogin} alt="steam-login" placeholder="blur" />
      <UnorderedList items={data.getCopyCredentialsSteps()} />
      <Image src={imageUrls.CredentialsCopy} alt="credentials-copy" placeholder="blur" />
      <UnorderedList items={data.getPasteCredentialsStep()} />
      <Image src={imageUrls.CredentialsDiscord} alt="credentials-discord" placeholder="blur" />
      <UnorderedList items={data.getTeammateRegistrationSteps()} />
      <Image src={imageUrls.TeammatesPaired} alt="teammates-paired" placeholder="blur" />
      <Heading2>Why are FCM Credentials necessary?</Heading2>
      <Paragraph>FCM Credentials are necessary in order to get the following:</Paragraph>
      <UnorderedList items={data.getFcmUsageBenefits()} />
      <Paragraph>Without these, the bot would not operate properly.</Paragraph>
    </section>
  );
};

export default FcmCredentialsSection;
