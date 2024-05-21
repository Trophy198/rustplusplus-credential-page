import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const MuteCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="mute">mute</Heading2>
      <Blockquote>
        <Strong>Mute the bot from the In-Game Team Chat</Strong>. This will mute everything the bot would normally say
        in Team Chat such as command response, event notifications, timers, Smart Device notifications.
        <br />
        Command: <Code>!mute</Code>
      </Blockquote>
      <Image src={imageUrl} alt="mute-in-game-command" placeholder="blur" />
    </>
  );
};

export default MuteCommand;
