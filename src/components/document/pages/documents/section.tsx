import styles from '../common.module.css';
import Heading from '../../heading/heading';
import Paragraph from '../../paragraph/paragraph';
import Card from '../../card/card';

const DocumentsSection = () => {
  return (
    <section className={styles.container}>
      <Heading>Documents</Heading>
      <Paragraph>
        As some of you might already know there are already some other Rust+ Discord Bots on the market, but what makes
        this one stand out is that it is completely free and open source! I figured those of you that don&apos;t wish to
        spend money on things like this but still want have all the benefits of such a bot, this is for you!
      </Paragraph>
      <Paragraph>
        Here are two ways to use RustPlusPlus features for free! either watch this{' '}
        <a target="_blank" href="https://youtu.be/GX03brJiMZg?si=71nPDTWYatrF6t9H">
          youtube video
        </a>{' '}
        or follow the guide below!
      </Paragraph>
      <div className={styles.gridcontainer}>
        <Card
          href="/documents/getting-started"
          title="Getting Started"
          description="Before using the discord bot, make sure to check the required software and the discord bot setup!"
        />
        <Card
          href="/documents/discord-text-channels"
          title="Discord Text Channels"
          description="Learn about the discord text channels created while using the bot!"
        />
        <Card
          href="/documents/commands"
          title="Commands"
          description="Check out the in-game commands and discord commands!"
        />
      </div>
    </section>
  );
};

export default DocumentsSection;
