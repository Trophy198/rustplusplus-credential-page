import Blockquote from '@/components/blockquote/blockquote';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import Paragraph from '../../paragraph/paragraph';
import UnorderedList from '../../unorderedList/unorderedList';
import * as data from '@/data/documents/fcmCredentials/unorderedItems';
import styles from '../common.module.css';
import Image from 'next/image';
import { ImageUrl } from '@/types/imageUrlTypes';

const FcmCredentialsSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>FCM Credentials Documentation</Heading>
      <Blockquote>
        To be able to use an instance of the bot properly, you want to setup your FCM Credentials. Adding these
        credentials makes it possible for you to pair with servers as well as connecting to them.
      </Blockquote>
      <Heading2>Retrieving FCM Credentials</Heading2>
      <UnorderedList items={data.getDownloadAndInstallSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.FcmCredentialApplicationConnect}
        alt="fcm_credential_application_connect"
        width={1200}
        height={850}
        placeholder="blur"
        priority
      />
      <UnorderedList items={data.getSteamLoginStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.SteamLogin}
        alt="steam_login"
        width={1200}
        height={850}
        placeholder="blur"
        priority
      />
      <UnorderedList items={data.getCopyCredentialsSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CredentialsCopy}
        alt="credentials_copy"
        width={1200}
        height={850}
        placeholder="blur"
        priority
      />
      <UnorderedList items={data.getPasteCredentialsStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CredentialsDiscord}
        alt="credentials_discord"
        width={1200}
        height={850}
        placeholder="blur"
        priority
      />
      <UnorderedList items={data.getTeammateRegistrationSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.TeammatesPaired}
        alt="teammates_paired"
        width={455}
        height={320}
        placeholder="blur"
        priority
      />
      <Heading2>Why are FCM Credentials necessary?</Heading2>
      <Paragraph>FCM Credentials are necessary in order to get the following:</Paragraph>
      <UnorderedList items={data.getFcmUsageBenefits()} />
      <Paragraph>Without these, the bot would not operate properly.</Paragraph>
    </section>
  );
};

export default FcmCredentialsSection;
