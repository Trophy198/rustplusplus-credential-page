import Blockquote from '@/components/blockquote/blockquote';
import Heading2 from '@/components/document/heading2/heading2';
import Image from 'next/image';

const HelpCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="help">/help</Heading2>
      <Blockquote>Display help message.</Blockquote>
      <Image src={imageUrl} alt="help-slash-command" placeholder="blur" />
    </>
  );
};

export default HelpCommand;
