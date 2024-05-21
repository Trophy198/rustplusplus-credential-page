import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const BlackListCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="blacklist">/blacklist</Heading2>
      <Blockquote>Blacklist a user from using the bot.</Blockquote>
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
            <TableColumn>Add user to the blacklist.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>discord_user</Code>
            </TableColumn>
            <TableColumn>The discord user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steamid</Code>
            </TableColumn>
            <TableColumn>The steamid of the user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Remove user from the blacklist.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>discord_user</Code>
            </TableColumn>
            <TableColumn>The discord user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steamid</Code>
            </TableColumn>
            <TableColumn>The steamid of the user.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>show</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Show blacklisted users.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="blacklist-slash-command" placeholder="blur" />
    </>
  );
};

export default BlackListCommand;
