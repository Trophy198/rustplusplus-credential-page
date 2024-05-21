import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const UptimeCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
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
      <Image src={imageUrl} alt="uptime-slash-command" placeholder="blur" />
    </>
  );
};

export default UptimeCommand;
