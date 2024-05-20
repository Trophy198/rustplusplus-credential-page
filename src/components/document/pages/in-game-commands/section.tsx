import { Link } from 'react-scroll';
import Heading from '../../heading/heading';
import Table from '../../table/table';
import TableHeader from '../../tableHeader/tableHeader';
import TableRow from '../../tableRow/tableRow';
import styles from '../common.module.css';
import TableColumn from '../../tableColumn/tableColumn';
import { InGameCommandList } from '@/data/documents/inGameCommands/inGameCommandList';
import { ImageUrl } from '@/types/imageUrlTypes';
import * as Ingame from './commands';
import Strong from '../../strong/strong';

const InGameCommandsSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>In-Game Commands</Heading>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>In-Game Command</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Object.entries(InGameCommandList).map(([command, description]) => (
            <TableRow key={command}>
              <TableColumn>
                <Link to={command} smooth={true} duration={500} offset={-105}>
                  <Strong>{command}</Strong>
                </Link>
              </TableColumn>
              <TableColumn>{description}</TableColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Ingame.AfkCommand imageUrl={imageUrls.AfkIngameCommand} />
      <Ingame.AliveCommand imageUrl={imageUrls.AliveIngameCommand} />
      <Ingame.CargoCommand imageUrl={imageUrls.CargoIngameCommand} />
      <Ingame.ChinookCommand imageUrl={imageUrls.ChinookIngameCommand} />
      <Ingame.ConnectionCommand imageUrl={imageUrls.ConnectionIngameCommand} />
      <Ingame.CraftCommand imageUrl={imageUrls.CraftIngameCommand} />
      <Ingame.DeathCommand imageUrl={imageUrls.DeathIngameCommand} />
      <Ingame.DecayCommand imageUrl={imageUrls.DecayIngameCommand} />
      <Ingame.EventsCommand imageUrl={imageUrls.EventsIngameCommand} />
      <Ingame.HeliCommand imageUrl={imageUrls.HeliIngameCommand} />
      <Ingame.LargeCommand imageUrl={imageUrls.LargeIngameCommand} />
      <Ingame.LeaderCommand imageUrl={imageUrls.LeaderIngameCommand} />
      <Ingame.MarkerCommand imageUrl={imageUrls.MarkerIngameCommand} />
      <Ingame.MarketCommand imageUrl={imageUrls.MarketIngameCommand} />
      <Ingame.MuteCommand imageUrl={imageUrls.MuteIngameCommand} />
      <Ingame.NoteAndNotesCommand imageUrl={imageUrls.NotesIngameCommand} />
      <Ingame.OfflineCommand imageUrl={imageUrls.OfflineIngameCommand} />
      <Ingame.OnlineCommand imageUrl={imageUrls.OnlineIngameCommand} />
      <Ingame.PlayerCommand
        playerImageUrl={imageUrls.PlayerIngameCommand}
        playersImageUrl={imageUrls.PlayersIngameCommand}
      />
      <Ingame.PopCommand imageUrl={imageUrls.PopIngameCommand} />
      <Ingame.ProxCommand imageUrl={imageUrls.ProxIngameCommand} />
      <Ingame.RecycleCommand imageUrl={imageUrls.RecycleIngameCommand} />
      <Ingame.ResearchCommand imageUrl={imageUrls.ResearchIngameCommand} />
      <Ingame.SendCommand imageUrl={imageUrls.SendIngameCommand} />
      <Ingame.SmallCommand imageUrl={imageUrls.SmallIngameCommand} />
      <Ingame.SteamidCommand imageUrl={imageUrls.SteamidIngameCommand} />
      <Ingame.TeamCommand imageUrl={imageUrls.TeamIngameCommand} />
      <Ingame.TimeCommand imageUrl={imageUrls.TimeIngameCommand} />
      <Ingame.TimerCommand imageUrl={imageUrls.TimerIngameCommand} />
      <Ingame.TrCommand
        languageImageUrl={imageUrls.LanguageCodeIngameCommand}
        translateToImageUrl={imageUrls.TranslateToIngameCommand}
      />
      <Ingame.TrfCommand imageUrl={imageUrls.TranslateFromIngameCommand} />
      <Ingame.TtsCommand imageUrl={imageUrls.TtsIngameCommand} />
      <Ingame.UnmuteCommand imageUrl={imageUrls.UnmuteIngameCommand} />
      <Ingame.UpkeepCommand imageUrl={imageUrls.UpKeepIngameCommand} />
      <Ingame.UptimeCommand imageUrl={imageUrls.UptimeIngameCommand} />
      <Ingame.WipeCommand imageUrl={imageUrls.WipeIngameCommand} />
    </section>
  );
};

export default InGameCommandsSection;
