import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Image from 'next/image';
import React from 'react';

const AfkCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="afk">afk</Heading2>
      <Blockquote>
        Get the currently afk players in your team. Definition of AFK for this command is inactivity &#40;No change in
        XY-coordinate&#41; for more than 5 minutes. Command: <Code>!afk</Code>
      </Blockquote>
      <Image src={imageUrl} alt="afk-in-game-command" placeholder="blur" />
    </>
  );
};

export default AfkCommand;
