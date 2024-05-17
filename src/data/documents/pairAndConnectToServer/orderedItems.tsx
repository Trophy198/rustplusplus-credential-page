import Code from '@/components/document/code/code';
import ListItem from '@/components/document/listItem/listItem';

export const orderedItems = [
  <ListItem key="list1">
    Make sure that you&apos;ve setup the FCM Credentials and that the bot is currently running &#40;
    <Code>npm start run</Code>&#41;.
  </ListItem>,
  <ListItem key="list2">Login to the Rust server you want to play.</ListItem>,
  <ListItem key="list3">
    Click <Code>ESC</Code> and then on <Code>Rust+</Code>.
  </ListItem>,
  <ListItem key="list4">
    Click <Code>PAIR WITH SERVER.</Code>
  </ListItem>,
];

export const orderedItems2 = [
  <ListItem key="list5">
    When you&apos;ve paired the server it should appear in the Discord Text Channel <Code>servers</Code>.
  </ListItem>,
];
export const orderedItems3 = [
  <ListItem key="list6">
    From there, you just click the <Code>CONNECT</Code> button and the bot will connect to the Rust server.
  </ListItem>,
];
