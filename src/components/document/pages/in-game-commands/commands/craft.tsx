import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const CraftCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="craft">craft ingame</Heading2>
      <Blockquote>
        <Strong>Display the cost to craft an item &#40;Quantity is optional&#41;.</Strong>
        <br />
        Command: <Code>!craft&#60;item-name&#62; &#60;quantity&#62;</Code>
        <br />
        Command: <Code>!craft Assault Rifle 10</Code>
        <br />
        Command: <Code>!craft rocket 100</Code>
      </Blockquote>
      <Image src={imageUrl} alt="craft-in-game-command" placeholder="blur" />
    </>
  );
};

export default CraftCommand;
