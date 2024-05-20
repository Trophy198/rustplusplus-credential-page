import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const HeliCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="heli">heli</Heading2>
      <Blockquote>
        <Strong>
          Get information about Patrol Helicopter &#40;Location, time since last downed, time since last on map&#41;.
        </Strong>
        <br />
        Command: <Code>!heli</Code>
      </Blockquote>
      <Image src={imageUrl} alt="heli-in-game-command" placeholder="blur" />
    </>
  );
};

export default HeliCommand;
