import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const ResearchCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="research">research ingame</Heading2>
      <Blockquote>
        <Strong> Display the cost to research an item.</Strong>
        <br />
        Command: <Code>!research &#60;item-name&#62;</Code>
        <br />
        Command: <Code>!research Assault Rifle</Code>
        <br />
        Command: <Code>!research rocket</Code>
      </Blockquote>
      <Image src={imageUrl} alt="research-in-game-command" placeholder="blur" />
    </>
  );
};

export default ResearchCommand;
