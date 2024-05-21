import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const PlayerCommand = ({ playerImageUrl, playersImageUrl }: { playerImageUrl: string; playersImageUrl: string }) => {
  return (
    <>
      <Heading2 id="player/players">player/players</Heading2>
      <Blockquote>
        <Strong>
          Get the names and playtime of the currently online players on the server &#40;Based on Battlemetrics&#41;.
        </Strong>
        To get all the currently online players on the server run <Code>!players</Code>. To get the information from a
        certain player run
        <br />
        <Code>!player &#60;name or part of name&#62;</Code>.
      </Blockquote>
      <Image src={playerImageUrl} alt="player-in-game-command" placeholder="blur" />
      <Image src={playersImageUrl} alt="players-in-game-command" placeholder="blur" />
    </>
  );
};

export default PlayerCommand;
