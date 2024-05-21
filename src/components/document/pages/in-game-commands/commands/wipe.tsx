import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const WipeCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="wipe">wipe</Heading2>
      <Blockquote>
        <Strong>Get the time since it was wiped.</Strong>
        <br />
        Command: <Code>!wipe</Code>
      </Blockquote>
      <Image src={imageUrl} alt="wipe-in-game-command" placeholder="blur" />
    </>
  );
};

export default WipeCommand;
