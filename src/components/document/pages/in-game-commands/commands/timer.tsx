import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const TimerCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="timer">timer</Heading2>
      <Blockquote>
        <Strong>Set custom timers that will notify whenever the timer have expired.</Strong> To list all registered
        timers run <Code>!timers</Code>.
        <Code>
          The argument &#60;time&#62; is used to set time in the format: 2h15m or 15m10s etc... &#40;not space between
          d/h/m/s&#41;.
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
              <Code>add</Code>
            </TableColumn>
            <TableColumn>
              Add a custom timer &#40;<Code>!timer add &#60;time&#62; &#60;text&#62;</Code>&#41;.
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
              Remove a custom timer &#40;<Code>!timer remove &#60;id&#62;</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="timer-in-game-command" placeholder="blur" />
    </>
  );
};

export default TimerCommand;
