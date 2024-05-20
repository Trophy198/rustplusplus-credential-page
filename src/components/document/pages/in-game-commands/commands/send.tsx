import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const SendCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="send">send</Heading2>
      <Blockquote>
        <Strong>Send a message to a discord user.</Strong>
        <br />
        Command: <Code>!send Alle Hello my friend!</Code>
      </Blockquote>
      <Image src={imageUrl} alt="send-in-game-command" placeholder="blur" />
    </>
  );
};

export default SendCommand;
