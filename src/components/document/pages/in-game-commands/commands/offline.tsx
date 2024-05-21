import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const OfflineCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="offline">offline</Heading2>
      <Blockquote>
        <Strong>Get the currently offline players in your team.</Strong>
        <br />
        Command: <Code>!offline</Code>
      </Blockquote>
      <Image src={imageUrl} alt="offline-in-game-command" placeholder="blur" />
    </>
  );
};

export default OfflineCommand;
