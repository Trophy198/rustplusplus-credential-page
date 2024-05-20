import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const ProxCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="prox">prox</Heading2>
      <Blockquote>
        <Strong>Get the distance to the three closest teammates.</Strong> To get the three closest teammates run{' '}
        <Code>!prox</Code>. To get the distance to a team member run <Code>!prox &#60;name or part of name&#62;</Code>.
      </Blockquote>
      <Image src={imageUrl} alt="prox-in-game-command" placeholder="blur" />
    </>
  );
};

export default ProxCommand;
