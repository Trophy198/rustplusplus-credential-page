import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const AliasCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="alias">/alias</Heading2>
      <Blockquote>Create an alias for a command/sequence of characters.</Blockquote>
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
              <Code>add</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Add an alias.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>alias</Code>
            </TableColumn>
            <TableColumn>The alias to use.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>value</Code>
            </TableColumn>
            <TableColumn>The command/sequence of characters.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Remove an alias.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>index</Code>
            </TableColumn>
            <TableColumn>The index of the alias to remove.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>show</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Show all registered aliases.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="alias-slash-command" placeholder="blur" />
    </>
  );
};

export default AliasCommand;
