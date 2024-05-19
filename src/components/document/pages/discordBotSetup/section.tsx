import Image from 'next/image';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import OrderedList from '../../orderedList/orderedList';
import Paragraph from '../../paragraph/paragraph';
import styles from '../common.module.css';
import * as data from '@/data/documents/discordBotSetup/orderedItems';
import { ImageUrls } from '@/types/imageUrls';

const DiscordBotSetupSection = ({ imageUrls }: { imageUrls: ImageUrls }) => {
  return (
    <section className={styles.container}>
      <Heading>Discord Bot Setup Documentation</Heading>
      <Heading2>Create a Discord Bot</Heading2>
      <OrderedList items={data.getApplicationIdSetupStep()} />
      <Image
        className={styles.documentimg}
        width={383}
        height={173}
        src={imageUrls.newApplicationBotSetup}
        alt="new_application_bot_setup"
        priority
      />
      <OrderedList start={3} items={data.getBotCreationStep()} />
      <Image
        className={styles.documentimg}
        width={465}
        height={396}
        src={imageUrls.createAnApplicationBotSetup}
        alt="create_an_application_bot_setup"
        priority
      />
      <OrderedList start={4} items={data.getApplicationIdSetupStep()} />
      <Image
        className={styles.documentimg}
        width={628}
        height={292}
        src={imageUrls.copyApplicationIdBotSetup}
        alt="copy_application_id_bot_setup"
        priority
      />
      <OrderedList start={5} items={data.getBotSetupStep()} />
      <Image
        className={styles.documentimg}
        width={614}
        height={194}
        src={imageUrls.botBotSetup}
        alt="bot_bot_setup"
        priority
      />
      <OrderedList start={6} items={data.getBotConfirmationStep()} />
      <Image
        className={styles.documentimg}
        width={474}
        height={227}
        src={imageUrls.yesCreateBotBotSetup}
        alt="yes_create_bot_bot_setup"
        priority
      />
      <OrderedList start={7} items={data.getTokenResetStep()} />
      <Image
        className={styles.documentimg}
        width={827}
        height={187}
        src={imageUrls.resetTokenBotSetup}
        alt="reset_token_bot_setup"
        priority
      />
      <OrderedList start={8} items={data.getTokenSetupStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={296}
        src={imageUrls.botTokenBotSetup}
        alt="bot_token_bot_setup"
        priority
      />
      <OrderedList start={9} items={data.getGatewayIntentSetupStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={296}
        src={imageUrls.privilegedGatewayIntentsBotSetup}
        alt="privileged_gateway_intents_bot_setup"
        priority
      />
      <OrderedList start={10} items={data.getOAuth2SetupStep()} />
      <Image
        className={styles.documentimg}
        width={323}
        height={265}
        src={imageUrls.oauth2BotSetup}
        alt="oauth2_bot_setup"
        priority
      />
      <OrderedList start={11} items={data.getScopeSelectionStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={239}
        src={imageUrls.scopesBotSetup}
        alt="scopes_bot_setup"
        priority
      />
      <OrderedList start={12} items={data.getBotPermissionsStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={424}
        src={imageUrls.botPermissionsBotSetup}
        alt="bot_permissions_bot_setup"
        priority
      />
      <OrderedList start={13} items={data.getGeneratedUrlStep()} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={93}
        src={imageUrls.generatedUrlBotSetup}
        alt="generated_url_bot_setup"
        priority
      />
      <OrderedList start={14} items={data.getBotAdditionStep()} />
      <Image
        className={styles.documentimg}
        width={414}
        height={646}
        src={imageUrls.addBotToServerBotSetup}
        alt="add_bot_to_server_bot_setup"
        priority
      />
      <OrderedList start={15} items={data.getAuthorizationStep()} />
      <Image
        className={styles.documentimg}
        width={421}
        height={677}
        src={imageUrls.authoriseBotSetup}
        alt="authorise_bot_setup"
        priority
      />
      <OrderedList start={16} items={data.getBotVisibilityStep()} />
      <Image
        className={styles.documentimg}
        width={294}
        height={139}
        src={imageUrls.botInServerBotSetup}
        alt="bot_in_server_bot_setup"
        priority
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
