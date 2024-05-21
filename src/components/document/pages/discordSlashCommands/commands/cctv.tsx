import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const CctvCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="cctv">/cctv</Heading2>
      <Blockquote>Posts CCTV codes for a monument.</Blockquote>
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
              <Code>monument</Code>
            </TableColumn>
            <TableColumn>Rust monument.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="cctv-slash-command" placeholder="blur" />
    </>
  );
};

export default CctvCommand;
