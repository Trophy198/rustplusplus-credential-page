import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';

const EventsCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="events">events</Heading2>
      <Blockquote>
        <Strong>Get recent In-Game events. Available events are cargo, heli, small, large, chinook</Strong>
        <br />
        Command: <Code>!events</Code> - Get last 5 events
        <br />
        Command: <Code>!events 3</Code> - Get last 3 events
        <br />
        Command: <Code>!events cargo</Code> - Get last 5 events from cargo
        <br />
        Command: <Code>!events cargo 2</Code> - Get last 2 events from cargo
      </Blockquote>
      <Image src={imageUrl} alt="events-in-game-command" placeholder="blur" />
    </>
  );
};

export default EventsCommand;
