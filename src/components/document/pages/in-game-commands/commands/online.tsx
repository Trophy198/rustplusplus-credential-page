import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const OnlineCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="online">online</Heading2>
      <Blockquote>
        <Strong>Get the currently online players in your team.</Strong>
        <br />
        Command: <Code>!online</Code>
      </Blockquote>
      <Image src={imageUrl} alt="online-in-game-command" placeholder="blur" />
    </>
  );
};

export default OnlineCommand;
