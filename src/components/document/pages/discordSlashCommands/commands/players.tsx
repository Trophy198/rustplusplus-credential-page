import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

interface PlayersCommandProps {
  playersSlashImageUrl: string;
  playersAllSlashImageUrl: string;
  playersSpecificSlashImageUrl: string;
}

const PlayersCommand = ({
  playersSlashImageUrl,
  playersAllSlashImageUrl,
  playersSpecificSlashImageUrl,
}: PlayersCommandProps) => {
  return (
    <>
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
      <Image src={playersSlashImageUrl} alt="players-slash-command" placeholder="blur" />
      <Image src={playersAllSlashImageUrl} alt="players-all-players-slas-_command" placeholder="blur" />
      <Image src={playersSpecificSlashImageUrl} alt="players-specific-user-slash-command" placeholder="blur" />
    </>
  );
};

export default PlayersCommand;
