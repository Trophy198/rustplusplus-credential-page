import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const UnmuteCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="unmute">unmute</Heading2>
      <Blockquote>
        <Strong>Unmute the bot from the In-Game Team Chat.</Strong>
        <br />
        Command: <Code>!unmute</Code>
      </Blockquote>
      <Image src={imageUrl} alt="unmute-in-game-command" placeholder="blur" />
    </>
  );
};

export default UnmuteCommand;
