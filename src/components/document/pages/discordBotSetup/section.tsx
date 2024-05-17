import Image from 'next/image';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import OrderedList from '../../orderedList/orderedList';
import Paragraph from '../../paragraph/paragraph';
import styles from '../common.module.css';
import * as data from '@/data/documents/discordBotSetup/orderedItems';

const DiscordBotSetupSection = () => {
  return (
    <section className={styles.container}>
      <Heading>Discord Bot Setup Documentation</Heading>
      <Heading2>Create a Discord Bot</Heading2>
      <OrderedList items={data.orderedItems}></OrderedList>
      <Image
        className={styles.documentimg}
        width={383}
        height={173}
        src={'/images/discordBotSetup/new_application_bot_setup.png'}
        alt="new_application_bot_setup"
        priority
      />
      <OrderedList start={3} items={data.orderedItems2} />
      <Image
        className={styles.documentimg}
        width={465}
        height={396}
        src={'/images/discordBotSetup/create_an_application_bot_setup.png'}
        alt="create_an_application_bot_setup"
        priority
      />
      <OrderedList start={4} items={data.orderedItems3} />
      <Image
        className={styles.documentimg}
        width={628}
        height={292}
        src={'/images/discordBotSetup/copy_application_id_bot_setup.png'}
        alt="copy_application_id_bot_setup"
        priority
      />
      <OrderedList start={5} items={data.orderedItems4} />
      <Image
        className={styles.documentimg}
        width={614}
        height={194}
        src={'/images/discordBotSetup/bot_bot_setup.png'}
        alt="bot_bot_setup"
        priority
      />
      <OrderedList start={6} items={data.orderedItems5} />
      <Image
        className={styles.documentimg}
        width={474}
        height={227}
        src={'/images/discordBotSetup/yes_create_bot_bot_setup.png'}
        alt="yes_create_bot_bot_setup"
        priority
      />
      <OrderedList start={7} items={data.orderedItems6} />
      <Image
        className={styles.documentimg}
        width={827}
        height={187}
        src={'/images/discordBotSetup/reset_token_bot_setup.png'}
        alt="reset_token_bot_setup"
        priority
      />
      <OrderedList start={8} items={data.orderedItems7} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={296}
        src={'/images/discordBotSetup/bot_token_bot_setup.png'}
        alt="bot_token_bot_setup"
        priority
      />
      <OrderedList start={9} items={data.orderedItems8} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={296}
        src={'/images/discordBotSetup/privileged_gateway_intents_bot_setup.png'}
        alt="privileged_gateway_intents_bot_setup"
        priority
      />
      <OrderedList start={10} items={data.orderedItems9} />
      <Image
        className={styles.documentimg}
        width={323}
        height={265}
        src={'/images/discordBotSetup/oauth2_bot_setup.png'}
        alt="oauth2_bot_setup"
        priority
      />
      <OrderedList start={11} items={data.orderedItems10} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={239}
        src={'/images/discordBotSetup/scopes_bot_setup.png'}
        alt="scopes_bot_setup"
        priority
      />
      <OrderedList start={12} items={data.orderedItems11} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={424}
        src={'/images/discordBotSetup/bot_permissions_bot_setup.png'}
        alt="bot_permissions_bot_setup"
        priority
      />
      <OrderedList start={13} items={data.orderedItems12} />
      <Image
        className={styles.documentimg}
        width={1000}
        height={93}
        src={'/images/discordBotSetup/generated_url_bot_setup.png'}
        alt="generated_url_bot_setup"
        priority
      />
      <OrderedList start={14} items={data.orderedItems13} />
      <Image
        className={styles.documentimg}
        width={414}
        height={646}
        src={'/images/discordBotSetup/add_bot_to_server_bot_setup.png'}
        alt="add_bot_to_server_bot_setup"
        priority
      />
      <OrderedList start={15} items={data.orderedItems14} />
      <Image
        className={styles.documentimg}
        width={421}
        height={677}
        src={'/images/discordBotSetup/authorise_bot_setup.png'}
        alt="authorise_bot_setup"
        priority
      />
      <OrderedList start={16} items={data.orderedItems15} />
      <Image
        className={styles.documentimg}
        width={294}
        height={139}
        src={'/images/discordBotSetup/bot_in_server_bot_setup.png'}
        alt="bot_in_server_bot_setup"
        priority
      />
      <OrderedList start={17} items={data.orderedItems16} />
      <Paragraph>
        You have now successfully added a Discord Bot with the desired permissions to your Discord Server. You have also
        added the Application/Client ID and Bot Token to the configuration file as well as started the bot for the first
        time.
      </Paragraph>
    </section>
  );
};

export default DiscordBotSetupSection;
