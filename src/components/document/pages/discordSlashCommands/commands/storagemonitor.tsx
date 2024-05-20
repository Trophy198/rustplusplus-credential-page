import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const StoragemonitorCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="storagemonitor">/storagemonitors</Heading2>
      <Blockquote>Operations on Storage Monitors.</Blockquote>
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
            <TableColumn>Edit the properties of a Storage Monitor.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the Storage Monitor.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>image</Code>
            </TableColumn>
            <TableColumn>Set the image that best represent the Storage Monitor.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="storagemonitor-slash-command" placeholder="blur" />
    </>
  );
};

export default StoragemonitorCommand;
