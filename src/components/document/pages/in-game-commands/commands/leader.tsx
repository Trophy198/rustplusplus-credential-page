import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const LeaderCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="leader">leader</Heading2>
      <Blockquote>
        <Strong>Give/Take the Team Leadership</Strong>. Calling the leader command alone will give the caller
        leadership. You can also give the leadership to a team member by writing the name or part of the name after the
        command.
        <br />
        <Code>
          This command can only be used if the user who set up the bot &#40;hoster&#41; is in the team. It is also
          available if the user is the one who registered the credentials.
        </Code>
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
              <Code>&#60;team_member_name&#62;</Code>
            </TableColumn>
            <TableColumn>
              <Code>The name or part of the name of a team member &#40;!leader &#60;name&#62;&#41;</Code>.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="leader-in-game-command" placeholder="blur" />
    </>
  );
};

export default LeaderCommand;
