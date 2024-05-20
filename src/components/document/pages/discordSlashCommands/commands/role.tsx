import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const RoleCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="role">/role</Heading2>
      <Blockquote>Set/Clear a specific role that will be able to see the rustplusplus category content.</Blockquote>
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
              <Code>set</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Set the role.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>role</Code>
            </TableColumn>
            <TableColumn>The role rustplusplus channels will be visible to.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>clear</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Clear the role &#40;to allow everyone to see the rustplusplus channels&#41;.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="role-slash-command" placeholder="blur" />
    </>
  );
};

export default RoleCommand;
