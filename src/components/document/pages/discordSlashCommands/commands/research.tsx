import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const ResearchCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
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
      <Image src={imageUrl} alt="research-slash-command" placeholder="blur" />
    </>
  );
};

export default ResearchCommand;
