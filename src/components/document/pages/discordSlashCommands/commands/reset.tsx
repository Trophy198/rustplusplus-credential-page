import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const ResetCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
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
      <Image src={imageUrl} alt="reset-slash-command" placeholder="blur" />
    </>
  );
};

export default ResetCommand;
