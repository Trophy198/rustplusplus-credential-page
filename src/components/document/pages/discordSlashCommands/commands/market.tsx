import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const MarketCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="market">/market</Heading2>
      <Blockquote>Operations for In-Game Vending Machines.</Blockquote>
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
              <Code>search</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Search for an item in Vending Machines.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>order</Code>
            </TableColumn>
            <TableColumn>The order type to search for &#40;all, buy, sell&#41;.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to search for.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the item to search for.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>subscribe</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Subscribe to an item in Vending Machines.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>order</Code>
            </TableColumn>
            <TableColumn>The order type &#40;all, buy, sell&#41;.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to subscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the item to subscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>unsubscribe</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Unsubscribe to an item in Vending Machines.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>order</Code>
            </TableColumn>
            <TableColumn>The order type &#40;all, buy, sell&#41;.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>name</Code>
            </TableColumn>
            <TableColumn>The name of the item to unsubscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>id</Code>
            </TableColumn>
            <TableColumn>The ID of the item to unsubscribe to.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>list</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Display the subscription list.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="market-slash-command" placeholder="blur" />
    </>
  );
};

export default MarketCommand;
