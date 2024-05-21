import { Link } from 'react-scroll';
import Heading from '../../heading/heading';
import Table from '../../table/table';
import TableColumn from '../../tableColumn/tableColumn';
import TableHeader from '../../tableHeader/tableHeader';
import TableRow from '../../tableRow/tableRow';
import styles from '../common.module.css';
import { ImageUrl } from '@/types/imageUrlTypes';
import { discordSlashCommandList } from '@/data/documents/discordSlashCommands/discordSlashCommandList';
import Strong from '../../strong/strong';
import * as DiscordSlash from './commands';

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
          {Object.entries(discordSlashCommandList).map(([command, description]) => (
            <TableRow key={command}>
              <TableColumn>
                <Link to={command} smooth={true} duration={500} offset={-105}>
                  <Strong>/{command}</Strong>
                </Link>
              </TableColumn>
              <TableColumn>{description}</TableColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <DiscordSlash.AlarmCommand imageUrl={imageUrls.AlarmsSlashCommand} />
      <DiscordSlash.AliasCommand imageUrl={imageUrls.AliasSlashCommand} />
      <DiscordSlash.BlackListCommand imageUrl={imageUrls.BlacklistSlashCommand} />
      <DiscordSlash.CctvCommand imageUrl={imageUrls.CctvSlashCommand} />
      <DiscordSlash.CraftCommand imageUrl={imageUrls.CraftSlashCommand} />
      <DiscordSlash.CredentialsCommand imageUrl={imageUrls.CredentialSlashCommand} />
      <DiscordSlash.DecayCommand imageUrl={imageUrls.DecaySlashCommand} />
      <DiscordSlash.HelpCommand imageUrl={imageUrls.HelpSlashCommand} />
      <DiscordSlash.ItemCommand imageUrl={imageUrls.ItemSlashCommand} />
      <DiscordSlash.LeaderCommand imageUrl={imageUrls.LeaderSlashCommand} />
      <DiscordSlash.MapCommand imageUrl={imageUrls.MapSlashCommand} />
      <DiscordSlash.MarketCommand imageUrl={imageUrls.MarketSlashCommand} />
      <DiscordSlash.PlayersCommand
        playersSlashImageUrl={imageUrls.PlayersSlashCommand}
        playersAllSlashImageUrl={imageUrls.PlayersAllPlayers}
        playersSpecificSlashImageUrl={imageUrls.PlayersSpecificUser}
      />
      <DiscordSlash.RecycleCommand imageUrl={imageUrls.RecycleSlashCommand} />
      <DiscordSlash.ResearchCommand imageUrl={imageUrls.ResearchSlashCommand} />
      <DiscordSlash.ResetCommand imageUrl={imageUrls.ResetSlashCommand} />
      <DiscordSlash.RoleCommand imageUrl={imageUrls.RoleSlashCommand} />
      <DiscordSlash.StoragemonitorCommand imageUrl={imageUrls.StoragemonitorSlashCommand} />
      <DiscordSlash.SwitchCommand imageUrl={imageUrls.SwitchSlashCommand} />
      <DiscordSlash.UpkeepCommand imageUrl={imageUrls.UpkeepSlashCommand} />
      <DiscordSlash.UptimeCommand imageUrl={imageUrls.UptimeSlashCommand} />
      <DiscordSlash.VoiceCommand imageUrl={imageUrls.VoiceSlashCommand} />
    </section>
  );
};

export default DiscordSlashCommandsSection;
