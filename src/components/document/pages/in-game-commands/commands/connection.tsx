import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const ConnectionCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="connection/connections">connection/connections</Heading2>
      <Blockquote>
        <Strong>Get recent connection events of the team or from a specific teammate.</Strong>
        <br />
        Command: <Code>!connections</Code>
        <br />
        Command: <Code>!connection Alle</Code>
      </Blockquote>
      <Image src={imageUrl} alt="connection-in-game-command" placeholder="blur" />
    </>
  );
};

export default ConnectionCommand;
