import Blockquote from '@/components/blockquote/blockquote';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import Paragraph from '../../paragraph/paragraph';
import UnorderedList from '../../unorderedList/unorderedList';
import * as data from '@/data/documents/fcmCredentials/unorderedItems';
import styles from '../common.module.css';
import Image from 'next/image';

const FcmCredentialsSection = () => {
  return (
    <section className={styles.container}>
      <Heading>FCM Credentials Documentation</Heading>
      <Blockquote>
        To be able to use an instance of the bot properly, you want to setup your FCM Credentials. Adding these
        credentials makes it possible for you to pair with servers as well as connecting to them.
      </Blockquote>
      <Heading2>Retrieving FCM Credentials</Heading2>
      <UnorderedList items={data.unorderedItems1} />
      <Image
        className={styles.documentimg}
        src="/images/fcmCredentials/fcm_credential_application_connect.png"
        alt="fcm_credential_application_connect"
        width={1200}
        height={850}
        priority
      />
      <UnorderedList items={data.unorderedItems2} />
      <Image
        className={styles.documentimg}
        src="/images/fcmCredentials/steam_login.png"
        alt="steam_login"
        width={1200}
        height={850}
        priority
      />
      <UnorderedList items={data.unorderedItems3} />
      <Image
        className={styles.documentimg}
        src="/images/fcmCredentials/credentials_copy.png"
        alt="credentials_copy"
        width={1200}
        height={850}
        priority
      />
      <UnorderedList items={data.unorderedItems4} />
      <Image
        className={styles.documentimg}
        src="/images/fcmCredentials/credentials_discord.png"
        alt="credentials_discord"
        width={1200}
        height={850}
        priority
      />
      <UnorderedList items={data.unorderedItems5} />
      <Image
        className={styles.documentimg}
        src="/images/fcmCredentials/teammates_paired.png"
        alt="teammates_paired"
        width={455}
        height={320}
        priority
      />
      <Heading2>Why is FCM Credentials necessary?</Heading2>
      <Paragraph>FCM Credentials are necessary in order to get the following:</Paragraph>
      <UnorderedList items={data.unorderedItems6} />
      <Paragraph>Without these, the bot would not operate properly.</Paragraph>
    </section>
  );
};

export default FcmCredentialsSection;
