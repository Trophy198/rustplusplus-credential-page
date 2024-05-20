import Image from 'next/image';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import OrderedList from '../../orderedList/orderedList';
import Paragraph from '../../paragraph/paragraph';
import styles from '../common.module.css';
import * as data from '@/data/documents/discordBotSetup/orderedItems';
import { ImageUrl } from '@/types/imageUrlTypes';

const DiscordBotSetupSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>Discord Bot Setup Documentation</Heading>
      <Heading2>Create a Discord Bot</Heading2>
      <OrderedList items={data.getApplicationIdSetupStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.NewApplicationBotSetup}
        alt="new-application-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={3} items={data.getBotCreationStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CreateAnApplicationBotSetup}
        alt="create-an-application-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={4} items={data.getApplicationIdSetupStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.CopyApplicationIdBotSetup}
        alt="copy-application-id-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={5} items={data.getBotSetupStep()} />
      <Image className={styles.documentimg} src={imageUrls.BotBotSetup} alt="bot_bot_setup" placeholder="blur" />
      <OrderedList start={6} items={data.getBotConfirmationStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.YesCreateBotBotSetup}
        alt="yes-create-bot-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={7} items={data.getTokenResetStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.ResetTokenBotSetup}
        alt="reset-token-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={8} items={data.getTokenSetupStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.BotTokenBotSetup}
        alt="bot-token-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={9} items={data.getGatewayIntentSetupStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.PrivilegedGatewayIntentsBotSetup}
        alt="privileged-gateway-intents-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={10} items={data.getOAuth2SetupStep()} />
      <Image className={styles.documentimg} src={imageUrls.Oauth2BotSetup} alt="oauth2_bot_setup" placeholder="blur" />
      <OrderedList start={11} items={data.getScopeSelectionStep()} />
      <Image className={styles.documentimg} src={imageUrls.ScopesBotSetup} alt="scopes_bot_setup" placeholder="blur" />
      <OrderedList start={12} items={data.getBotPermissionsStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.BotPermissionsBotSetup}
        alt="bot-permissions-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={13} items={data.getGeneratedUrlStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.GeneratedUrlBotSetup}
        alt="generated-url-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={14} items={data.getBotAdditionStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.AddBotToServerBotSetup}
        alt="add-bot-to-server-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={15} items={data.getAuthorizationStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.AuthoriseBotSetup}
        alt="authorise-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={16} items={data.getBotVisibilityStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.BotInServerBotSetup}
        alt="bot-in-server-bot-setup"
        placeholder="blur"
      />
      <OrderedList start={17} items={data.getBotStartStep()} />
      <Paragraph>
        You have now successfully added a Discord Bot with the desired permissions to your Discord Server. You have also
        added the Application/Client ID and Bot Token to the configuration file as well as started the bot for the first
        time.
      </Paragraph>
    </section>
  );
};

export default DiscordBotSetupSection;
