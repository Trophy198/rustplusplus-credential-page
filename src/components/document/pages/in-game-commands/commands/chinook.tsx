import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const ChinookCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="chinook">chinook</Heading2>
      <Blockquote>
        <Strong> Get information about Chinook 47 &#40;Location, time since last on map&#41;.</Strong>
        <br />
        Command: <Code>!chinook</Code>
      </Blockquote>
      <Image src={imageUrl} alt="chinook-in-game-command" placeholder="blur" />
    </>
  );
};

export default ChinookCommand;
