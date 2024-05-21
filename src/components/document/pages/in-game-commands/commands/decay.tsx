import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const DecayCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="decay">decay ingame</Heading2>
      <Blockquote>
        <Strong>Display the decay time of an item.</Strong>
        <br />
        Command: <Code>!decay</Code>
        <br />
        Command: <Code>!decay Sheet Metal Door</Code>
        <br />
        Command: <Code>!decay Tug Boat 100</Code>
        <br />
        Command: <Code>!decay armored wall 450</Code>
      </Blockquote>
      <Image src={imageUrl} alt="decay-in-game-command" placeholder="blur" />
    </>
  );
};

export default DecayCommand;
