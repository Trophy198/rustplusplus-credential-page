import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const MapCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="map">/map</Heading2>
      <Blockquote>Get the currently connected server map image.</Blockquote>
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
              <Code>all</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the map including both monument names and markers.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>clean</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the clean map.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>monuments</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the map including monument names.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>markers</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Get the map including markers.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="map-slash-command" placeholder="blur" />
    </>
  );
};

export default MapCommand;
