import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const PopCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="pop">pop</Heading2>
      <Blockquote>
        <Strong>Get the current population of the server including queue size and max population.</Strong>
        <br />
        Command: <Code>!pop</Code>
      </Blockquote>
      <Image src={imageUrl} alt="pop-in-game-command" placeholder="blur" />
    </>
  );
};

export default PopCommand;
