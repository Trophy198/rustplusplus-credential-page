import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const TimeCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="time">time</Heading2>
      <Blockquote>
        <Strong>Get the current time In-Game and time till day/night.</Strong>
        <br />
        Command: <Code>!time</Code>
      </Blockquote>
      <Image src={imageUrl} alt="time-in-game-command" placeholder="blur" />
    </>
  );
};

export default TimeCommand;
