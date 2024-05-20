import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const MarketCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="market">market ingame</Heading2>
      <Blockquote>
        <Strong>Search for items in vending machines or subscribe/unsubscribe to items.</Strong>
        <br />
        Command: <Code>!market search sell Thompson</Code>
        <br />
        Command: <Code>!market sub sell m249</Code>
        <br />
        Command: <Code>!market sub all Scrap</Code>
        <br />
        Command: <Code>!market unsub sell m249</Code>
        <br />
        Command: <Code>!market list</Code>
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
              <Code>search</Code>
            </TableColumn>
            <TableColumn>
              Search for an item in Vending Machines &#40;<Code>!market search sell thompson</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>sub</Code>
            </TableColumn>
            <TableColumn>
              Subscribe to an item in Vending Machines &#40;<Code>!market sub all thompson</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>unsub</Code>
            </TableColumn>
            <TableColumn>
              Unsubscribe to an item in Vending Machines &#40;<Code>!market unsub sell thompson</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>list</Code>
            </TableColumn>
            <TableColumn>
              Display the subscription list &#40;<Code>!market list</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="market-in-game-command" placeholder="blur" />
    </>
  );
};

export default MarketCommand;
