import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const CargoCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="cargo">cargo</Heading2>
      <Blockquote>
        <Strong>
          Get information about CargoShip &#40;Location, time till enters egress stage, time since last on map&#41;.
        </Strong>
        <br />
        Command: <Code>!cargo</Code>
      </Blockquote>
      <Image src={imageUrl} alt="cargo-in-game-command" placeholder="blur" />
    </>
  );
};

export default CargoCommand;
