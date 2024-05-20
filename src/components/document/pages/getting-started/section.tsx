import Card from '../../card/card';
import Heading from '../../heading/heading';
import styles from '../common.module.css';

const GettingStartedSection = () => {
  return (
    <section className={styles.container}>
      <Heading>Getting Started</Heading>
      <div className={styles.gridcontainer}>
        <Card
          href="/documents/getting-started/installation"
          title="installation"
          description="Before getting started, make sure to check the required software installations!"
        />
        <Card
          href="/documents/getting-started/discord-bot-setup"
          title="Discord Bot Setup"
          description="Create a Discord bot and invite it to your server!"
        />
        <Card
          href="/documents/getting-started/fcm-credentials"
          title="FCM Credentials"
          description="Set up your FCM credentials!"
        />
        <Card
          href="/documents/getting-started/pair-and-connect-to-a-server"
          title="Pair and Conect to a server"
          description="Pair with the server to retrieve server information!"
        />
      </div>
    </section>
  );
};

export default GettingStartedSection;
