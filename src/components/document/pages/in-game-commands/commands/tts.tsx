import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const TtsCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="tts">tts</Heading2>
      <Blockquote>
        <Strong>Send a Text-To-Speech message to the Discord teamchat channel.</Strong> To execute a Text-To-Speech
        command run <Code>!tts &#60;text&#62;</Code>.
        <br />
        Command: <Code>!tts &#60;text&#62;</Code>
      </Blockquote>
      <Image src={imageUrl} alt="tts-in-game-command" placeholder="blur" />
    </>
  );
};

export default TtsCommand;
