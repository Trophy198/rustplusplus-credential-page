import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const TrCommand = ({
  languageImageUrl,
  translateToImageUrl,
}: {
  languageImageUrl: string;
  translateToImageUrl: string;
}) => {
  return (
    <>
      <Heading2 id="tr">tr</Heading2>
      <Blockquote>
        <Strong>Translate a text from English to another language.</Strong>
        <br />
        Command: <Code>!tr &#60;language-code&#62; &#60;Text&#62;</Code>
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
              <Code>language</Code>
            </TableColumn>
            <TableColumn>
              Get the language code &#40;<Code>!tr language &#60;language&#62;</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>&#60;language-code&#62;</Code>
            </TableColumn>
            <TableColumn>
              Translate the text to this language &#40;<Code>!tr &#60;language&#62; &#60;text&#62;</Code>&#41;.
            </TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={languageImageUrl} alt="language-code-in-game-command" placeholder="blur" />
      <Image src={translateToImageUrl} alt="translate-to-in-game-command" placeholder="blur" />
    </>
  );
};

export default TrCommand;
