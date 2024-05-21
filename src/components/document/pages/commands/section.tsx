import Blockquote from '@/components/blockquote/blockquote';
import Card from '../../card/card';
import Heading from '../../heading/heading';
import styles from '../common.module.css';

const CommandsSection = () => {
  return (
    <section className={styles.container}>
      <Heading>Commands</Heading>
      <Blockquote>
        Commands can be executed via Discord or In-Game Team Chat. To be able to run Slash Commands in Discord, you need
        to be part of the designated Discord Role for the bot. If no role is set for the bot then everyone should be
        able to use the Slash Commands by default. To be able to run In-Game Commands, you need to be in the same
        In-Game Team as the hoster. In-Game Commands can only be run from Team Chat, not global chat. You can also run
        In-Game commands from the Discord Text-Channel commands.
      </Blockquote>
      <div className={styles.gridcontainer}>
        <Card
          href="/documents/commands/discord-slash-commands"
          title="Discord Slash Commands"
          description="Check out the full list of available Discord slash commands!"
        />
        <Card
          href="/documents/commands/in-game-commands"
          title="In-Game Commands"
          description="Check out the full list of available in-game commands!"
        />
      </div>
    </section>
  );
};

export default CommandsSection;
