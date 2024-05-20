import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const UpkeepCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="upkeep">upkeep</Heading2>
      <Blockquote>
        <Strong>Get the upkeep time of all connected tool cupboard monitors.</Strong>
        <br />
        Command: <Code>!upkeep</Code>
      </Blockquote>
      <Image src={imageUrl} alt="upkeep-in-game-command" placeholder="blur" />
    </>
  );
};

export default UpkeepCommand;
