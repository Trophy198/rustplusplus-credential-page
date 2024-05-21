import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const TeamCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="team">team</Heading2>
      <Blockquote>
        <Strong>Get the names of all members in the team.</Strong>
        <br />
        Command: <Code>!team</Code>
      </Blockquote>
      <Image src={imageUrl} alt="team-in-game-command" placeholder="blur" />
    </>
  );
};

export default TeamCommand;
