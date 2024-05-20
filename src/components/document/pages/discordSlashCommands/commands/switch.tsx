import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const SwitchCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
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
      <Image src={imageUrl} alt="switch-slash-command" placeholder="blur" />
    </>
  );
};

export default SwitchCommand;
