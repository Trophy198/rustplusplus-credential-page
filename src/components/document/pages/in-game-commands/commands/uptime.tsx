import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const UptimeCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="uptime">uptime ingame</Heading2>
      <Blockquote>
        <Strong>Display the uptime of the bot and server.</Strong>
        <br />
        Command: <Code>!uptime</Code>
      </Blockquote>
      <Image src={imageUrl} alt="uptime-in-game-command" placeholder="blur" />
    </>
  );
};

export default UptimeCommand;
