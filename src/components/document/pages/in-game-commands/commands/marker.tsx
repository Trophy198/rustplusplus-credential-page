import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const MarkerCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="marker">marker</Heading2>
      <Blockquote>
        <Strong>Set custom markers anywhere on the map</Strong>. This command can be very useful for small stash
        locations. Place down a small stash, create a marker on that spot and be able to navigate back to that exact
        place at a later stage. To list all registered markers, run <Code>!markers</Code>.
      </Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Subcommand</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>add</Code>
            </TableColumn>
            <TableColumn>
              Add a custom marker &#40;<Code>!marker add &#60;name&#62;</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn>
              Remove a custom marker &#40;<Code>!marker remove &#60;id&#62;</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>&#60;marker_name&#62;</Code>
            </TableColumn>
            <TableColumn>
              Calling with the name of the marker will let you navigate to that marker
              <br />
              &#40;
              <Code>!marker &#60;name&#62;</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="marker-in-game-command" placeholder="blur" />
    </>
  );
};

export default MarkerCommand;
