import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const VoiceCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
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
      <Image src={imageUrl} alt="voice-slash-command" placeholder="blur" />
    </>
  );
};

export default VoiceCommand;
