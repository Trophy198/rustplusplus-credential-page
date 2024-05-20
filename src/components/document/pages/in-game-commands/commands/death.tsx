import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const DeathCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="death/deaths">death/deaths</Heading2>
      <Blockquote>
        <Strong>Get recent death events of the team or from a specific teammate.</Strong>
        <br />
        Command: <Code>!deaths</Code>
        <br />
        Command: <Code>!death Alle</Code>
      </Blockquote>
      <Image src={imageUrl} alt="death-in-game-command" placeholder="blur" />
    </>
  );
};

export default DeathCommand;
