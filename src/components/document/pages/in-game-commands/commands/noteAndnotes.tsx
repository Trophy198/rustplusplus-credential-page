import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const NoteAndNotesCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="note/notes">note/notes</Heading2>
      <Blockquote>
        <Strong>Create notes about meaningful things</Strong>. To list all registered notes run <Code>!notes</Code>, all
        note ids will be presented as well.
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
              Add a note &#40;<Code>!note add &#60;text&#62;</Code>&#41;
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
              Remove a note &#40;<Code>!note remove &#60;id&#62;</Code>&#41;
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="notes-in-game-command" placeholder="blur" />
    </>
  );
};

export default NoteAndNotesCommand;
