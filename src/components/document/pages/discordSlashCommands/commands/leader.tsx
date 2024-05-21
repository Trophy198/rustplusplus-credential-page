import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const LeaderCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
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
      <Image src={imageUrl} alt="leader-slash-command" placeholder="blur" />
    </>
  );
};

export default LeaderCommand;
