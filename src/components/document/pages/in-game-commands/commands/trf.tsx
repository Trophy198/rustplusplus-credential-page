import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const TrfCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="trf">trf</Heading2>
      <Blockquote>
        <Strong>Translate a text from a language to another language.</Strong>
        <br />
        Command: <Code>!trf &#60;language-code-from&#62; &#60;language-code-to&#62; &#60;Text&#62;</Code>
      </Blockquote>
      <Image src={imageUrl} alt="translate-from-in-game-command" placeholder="blur" />
    </>
  );
};

export default TrfCommand;
