import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const SmallCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="small">small</Heading2>
      <Blockquote>
        <Strong>Get information about Small Oil Rig &#40;Time till crate unlocks, time since last trigger&#41;.</Strong>
        <br />
        Command: <Code>!small</Code>
      </Blockquote>
      <Image src={imageUrl} alt="small-in-game-command" placeholder="blur" />
    </>
  );
};

export default SmallCommand;
