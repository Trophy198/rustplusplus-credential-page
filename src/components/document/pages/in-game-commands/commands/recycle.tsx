import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const RecycleCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="recycle">recycle ingame</Heading2>
      <Blockquote>
        <Strong>Display the output of recycling an item &#40;Quantity is optional&#41;.</Strong>
        <br />
        Command: <Code>!recycle &#60;item-name&#62; &#60;quantity&#62;</Code>
        <br />
        Command: <Code>!recycle Assault Rifle 10</Code>
        <br />
        Command: <Code>!recycle rocket 100</Code>
      </Blockquote>
      <Image src={imageUrl} alt="recycle-in-game-command" placeholder="blur" />
    </>
  );
};

export default RecycleCommand;
