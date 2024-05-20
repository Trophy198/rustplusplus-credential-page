import Blockquote from '@/components/blockquote/blockquote';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import Table from '../../table/table';
import TableColumn from '../../tableColumn/tableColumn';
import TableHeader from '../../tableHeader/tableHeader';
import TableRow from '../../tableRow/tableRow';
import styles from '../common.module.css';
import Code from '../../code/code';
import { ImageUrl } from '@/types/imageUrlTypes';
import Image from 'next/image';

const DiscordSlashCommandsSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>Discord Slash Commands</Heading>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Slash Command</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <a href="#alarm">/alarm</a>
            </TableColumn>
            <TableColumn>Operations on Smart Alarms.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#alias">/alias</a>
            </TableColumn>
            <TableColumn>Create an alias for a command/sequence of characters.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#blacklist">/blacklist</a>
            </TableColumn>
            <TableColumn>Blacklist a user from using the bot.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#cctv">/cctv</a>
            </TableColumn>
            <TableColumn>Posts CCTV codes for a monument.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#craft">/craft</a>
            </TableColumn>
            <TableColumn>Display the cost to craft an item.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#credentials">/credentials</a>
            </TableColumn>
            <TableColumn>Set/Clear the FCM Credentials for the user account.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#decay">/decay</a>
            </TableColumn>
            <TableColumn>Display the decay time of an item.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#help">/help</a>
            </TableColumn>
            <TableColumn>Display help message.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#item">/item</a>
            </TableColumn>
            <TableColumn>Get the details of an item.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#leader">/leader</a>
            </TableColumn>
            <TableColumn>Give or take the leadership from/to a team member.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#map">/map</a>
            </TableColumn>
            <TableColumn>Get the currently connected server map image.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#market">/market</a>
            </TableColumn>
            <TableColumn>Operations for In-Game Vending Machines.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#players">/players</a>
            </TableColumn>
            <TableColumn>Get player/players information based on battlemetrics.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#recycle">/recycle</a>
            </TableColumn>
            <TableColumn>Display the output of recycling an item.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#research">/research</a>
            </TableColumn>
            <TableColumn>Display the cost to research an item.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#reset">/reset</a>
            </TableColumn>
            <TableColumn>Reset Discord channels.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#role">/role</a>
            </TableColumn>
            <TableColumn>
              Set/Clear a specific role that will be able to see the rustplusplus category content.
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#storagemonitors">/storagemonitors</a>
            </TableColumn>
            <TableColumn>Operations on Storage Monitors.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#switch">/switch</a>
            </TableColumn>
            <TableColumn>Operations on Smart Switches.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#upkeep">/upkeep</a>
            </TableColumn>
            <TableColumn>Get the upkeep cost of an item.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#uptime">/uptime</a>
            </TableColumn>
            <TableColumn>Operations on Smart Alarms.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <a href="#voice">/voice</a>
            </TableColumn>
            <TableColumn>Operations on Voice Feature.</TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Heading2 id="alarm">/alarm</Heading2>
      <Blockquote>Operations on Smart Alarms.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>edit</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Edit the properties of a Smart Alarm.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the Smart Alarm.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>image</Code>
            </TableColumn>
            <TableColumn>Set the image that best represent the Smart Alarm.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={509}
        // height={177}
        src={imageUrls.AlarmsSlashCommand}
        alt="alarms_slash_command"
        placeholder="blur"
      />
      <Heading2 id="alias">/alias</Heading2>
      <Blockquote>Create an alias for a command/sequence of characters.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>add</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Add an alias.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>alias</Code>
            </TableColumn>
            <TableColumn>The alias to use.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>value</Code>
            </TableColumn>
            <TableColumn>The command/sequence of characters.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Remove an alias.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>index</Code>
            </TableColumn>
            <TableColumn>The index of the alias to remove.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>show</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Show all registered aliases.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.AliasSlashCommand}
        alt="alias_slash_command"
        placeholder="blur"
      />
      <Heading2 id="blacklist">/blacklist</Heading2>
      <Blockquote>Blacklist a user from using the bot.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>add</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Add user to the blacklist.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>discord_user</Code>
            </TableColumn>
            <TableColumn>The discord user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steamid</Code>
            </TableColumn>
            <TableColumn>The steamid of the user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Remove user from the blacklist.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>discord_user</Code>
            </TableColumn>
            <TableColumn>The discord user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steamid</Code>
            </TableColumn>
            <TableColumn>The steamid of the user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>show</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Show blacklisted users.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={359}
        src={imageUrls.BlacklistSlashCommand}
        alt="blacklist_slash_command"
        placeholder="blur"
      />
      <Heading2 id="cctv">/cctv</Heading2>
      <Blockquote>Posts CCTV codes for a monument.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>monument</Code>
            </TableColumn>
            <TableColumn>Rust monument.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={549}
        // height={242}
        src={imageUrls.CctvSlashCommand}
        alt="cctv_slash_command"
        placeholder="blur"
      />
      <Heading2 id="craft">/craft</Heading2>
      <Blockquote>Display the cost to craft an item.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to craft.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The id of the item to craft.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>quantity</Code>
            </TableColumn>
            <TableColumn>The quantity of items to craft.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={548}
        // height={175}
        src={imageUrls.CraftSlashCommand}
        alt="craft_slash_command"
        placeholder="blur"
      />
      <Heading2 id="credentials">/credentials</Heading2>
      <Blockquote>Add/Remove the FCM Credentials for the user account.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>add</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Add FCM Credentials.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>keys_private_key</Code>
            </TableColumn>
            <TableColumn>Keys Private Key.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>keys_public_key</Code>
            </TableColumn>
            <TableColumn>Keys Public Key.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>keys_auth_secret</Code>
            </TableColumn>
            <TableColumn>Keys Auth Secret.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>fcm_token</Code>
            </TableColumn>
            <TableColumn>FCM Token.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>fcm_push_set</Code>
            </TableColumn>
            <TableColumn>FCM Push Set.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_token</Code>
            </TableColumn>
            <TableColumn>GCM Token.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_android_id</Code>
            </TableColumn>
            <TableColumn>GCM Android ID.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_security_token</Code>
            </TableColumn>
            <TableColumn>GCM Security Token.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_app_id</Code>
            </TableColumn>
            <TableColumn>GCM App ID.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steam_id</Code>
            </TableColumn>
            <TableColumn>Steam ID.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>hoster</Code>
            </TableColumn>
            <TableColumn>Should be hoster.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Remove FCM Credentials.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steam_id</Code>
            </TableColumn>
            <TableColumn>Steam ID.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>show</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Show all registered FCM Credentials.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>set_hoster</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Set the hoster.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steam_id</Code>
            </TableColumn>
            <TableColumn>Steam ID.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={508}
        // height={340}
        src={imageUrls.CredentialSlashCommand}
        alt="credentials_slash_command"
        placeholder="blur"
      />
      <Heading2 id="decay">/decay</Heading2>
      <Blockquote>Display the decay time of an item.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The id of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>hp</Code>
            </TableColumn>
            <TableColumn>THe current HP of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={537}
        // height={176}
        src={imageUrls.DecaySlashCommand}
        alt="decay_slash_command"
        placeholder="blur"
      />
      <Heading2 id="help">/help</Heading2>
      <Blockquote>Display help message.</Blockquote>
      <Image
        className={styles.documentimg}
        // width={503}
        // height={175}
        src={imageUrls.HelpSlashCommand}
        alt="help_slash_command"
        placeholder="blur"
      />
      <Heading2 id="item">/item</Heading2>
      <Blockquote>Get the details of an item.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The id of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={546}
        // height={174}
        src={imageUrls.ItemSlashCommand}
        alt="item_slash_command"
        placeholder="blur"
      />
      <Heading2 id="leader">/leader</Heading2>
      <Blockquote>Give or take the leadership from/to a team member.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>member</Code>
            </TableColumn>
            <TableColumn>The name of the team member.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={502}
        // height={170}
        src={imageUrls.LeaderSlashCommand}
        alt="leader_slash_command"
        placeholder="blur"
      />
      <Heading2 id="map">/map</Heading2>
      <Blockquote>Get the currently connected server map image.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>all</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the map including both monument names and markers.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>clean</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the clean map.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>monuments</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the map including monument names.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>markers</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the map including markers.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={504}
        // height={338}
        src={imageUrls.MapSlashCommand}
        alt="map_slash_command"
        placeholder="blur"
      />
      <Heading2 id="market">/market</Heading2>
      <Blockquote>Operations for In-Game Vending Machines.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>search</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Search for an item in Vending Machines.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>order</Code>
            </TableColumn>
            <TableColumn>The order type to search for &#40;all, buy, sell&#41;.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to search for.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the item to search for.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>subscribe</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Subscribe to an item in Vending Machines.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>order</Code>
            </TableColumn>
            <TableColumn>The order type &#40;all, buy, sell&#41;.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to subscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the item to subscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>unsubscribe</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Unsubscribe to an item in Vending Machines.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>order</Code>
            </TableColumn>
            <TableColumn>The order type &#40;all, buy, sell&#41;.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to unsubscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the item to unsubscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>list</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Display the subscription list.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={505}
        // height={339}
        src={imageUrls.MarketSlashCommand}
        alt="market_slash_command"
        placeholder="blur"
      />
      <Heading2 id="players">/players</Heading2>
      <Blockquote>
        Get player/players information based on Battlemetrics. Calling the subcommand name without the name option will
        display all players depending on status option. By calling the subcommand playerid, you will get more specific
        information about a single player.
      </Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Search for a player on Battlemetrics based on player name.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>status</Code>
            </TableColumn>
            <TableColumn>Search for players that are online/offline/any.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the player.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>battlemetricsid</Code>
            </TableColumn>
            <TableColumn>The Battlemetrics ID of the server &#40;default: The connected server&#41;.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>playerid</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Search for a player on Battlemetrics based on player id.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>playerid</Code>
            </TableColumn>
            <TableColumn>The player id of the player.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>battlemetricsid</Code>
            </TableColumn>
            <TableColumn>The Battlemetrics ID of the server &#40;default: The connected server&#41;.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={505}
        // height={339}
        src={imageUrls.PlayersSlashCommand}
        alt="players_slash_command"
        placeholder="blur"
      />
      <Image
        className={styles.documentimg}
        // width={505}
        // height={339}
        src={imageUrls.Players_all_players}
        alt="players_all_players_slash_command"
        placeholder="blur"
      />
      <Image
        className={styles.documentimg}
        // width={505}
        // height={339}
        src={imageUrls.Players_specific_user}
        alt="players_specific_user_slash_command"
        placeholder="blur"
      />
      <Heading2 id="recycle">/recycle</Heading2>
      <Blockquote>Display the output of recycling an item.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to recycle.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The id of the item to recycle.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>quantitiy</Code>
            </TableColumn>
            <TableColumn>The quantitiy of the items to recycle.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={504}
        // height={338}
        src={imageUrls.RecycleSlashCommand}
        alt="recycle_slash_command"
        placeholder="blur"
      />
      <Heading2 id="research">/research</Heading2>
      <Blockquote>Display the cost to research an item.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to research.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The id of the item to research.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={504}
        // height={338}
        src={imageUrls.ResearchSlashCommand}
        alt="research_slash_command"
        placeholder="blur"
      />
      <Heading2 id="reset">/reset</Heading2>
      <Blockquote>Reset Discord channels.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>discord</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset discord channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>information</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset information channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>servers</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset servers channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>settings</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset settings channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>switches</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset switches channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>alarms</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset alarms channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>storagemonitors</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset storagemonitors channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>trackers</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Reset trackers channels.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={504}
        // height={338}
        src={imageUrls.ResetSlashCommand}
        alt="reset_slash_command"
        placeholder="blur"
      />
      <Heading2 id="role">/role</Heading2>
      <Blockquote>Set/Clear a specific role that will be able to see the rustplusplus category content.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>set</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Set the role.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>role</Code>
            </TableColumn>
            <TableColumn>The role rustplusplus channels will be visible to.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>clear</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Clear the role &#40;to allow everyone to see the rustplusplus channels&#41;.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.RoleSlashCommand}
        alt="role_slash_command"
        placeholder="blur"
      />
      <Heading2 id="storagemonitors">/storagemonitors</Heading2>
      <Blockquote>Operations on Storage Monitors.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>edit</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Edit the properties of a Storage Monitor.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the Storage Monitor.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>image</Code>
            </TableColumn>
            <TableColumn>Set the image that best represent the Storage Monitor.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.StoragemonitorSlashCommand}
        alt="storagemonitor_slash_command"
        placeholder="blur"
      />
      <Heading2 id="switch">/switch</Heading2>
      <Blockquote>Operations on Smart Switches.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>edit</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Edit the properties of a Smart Switch.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the Smart Switch.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>image</Code>
            </TableColumn>
            <TableColumn>Set the image that best represent the Smart Switch.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.SwitchSlashCommand}
        alt="switch_slash_command"
        placeholder="blur"
      />
      <Heading2 id="upkeep">/upkeep</Heading2>
      <Blockquote>Get the upkeep cost of an item.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The id of the item.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.UpkeepSlashCommand}
        alt="upkeep_slash_command"
        placeholder="blur"
      />
      <Heading2 id="uptime">/uptime</Heading2>
      <Blockquote>Display uptime of the bot and server.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>bot</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Display uptime of bot.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>server</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Display uptime of server.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.UptimeSlashCommand}
        alt="uptime_slash_command"
        placeholder="blur"
      />
      <Heading2 id="voice">/voice</Heading2>
      <Blockquote>Operations on Voice Feature.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>join</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Bot Joins a Voicechannel.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>leave</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Bot Leaves a Voicechannel.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image
        className={styles.documentimg}
        // width={629}
        // height={244}
        src={imageUrls.VoiceSlashCommand}
        alt="voice_slash_command"
        placeholder="blur"
      />
    </section>
  );
};

export default DiscordSlashCommandsSection;
