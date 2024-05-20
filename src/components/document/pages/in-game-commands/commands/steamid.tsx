import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const SteamidCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="steamid">steamid</Heading2>
      <Blockquote>
        <Strong>Get the steamid of a teammate.</Strong>
      </Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Subcommand</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>&#60;team_member_name&#62;</Code>
            </TableColumn>
            <TableColumn>
              The name or part of the name of a team member &#40;<Code>!steamid &#60;name&#62;</Code>&#41;
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="steamid-in-game-command" placeholder="blur" />
    </>
  );
};

export default SteamidCommand;
