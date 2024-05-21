import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Image from 'next/image';

const AliveCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="alive">alive</Heading2>
      <Blockquote>
        Get the player with the longest time alive or the alive time of a teammate. <br />
        Command: <Code>!alive</Code> <br />
        Command: <Code>!alive Alle</Code>
      </Blockquote>
      <Image src={imageUrl} alt="alive-in-game-command" placeholder="blur" />
    </>
  );
};

export default AliveCommand;
