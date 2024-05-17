import Code from '@/components/document/code/code';
import ListItem from '@/components/document/listItem/listItem';

export const unorderedItems1 = [
  <ListItem key="install-credential-app">
    Download and install the{' '}
    <a href="https://github.com/alexemanuelol/rustplusplus-Credential-Application/releases/download/v1.1.0/rustPlusPlus-1.1.0-win-x64.exe">
      rustplusplus FCM Credential Application
    </a>
  </ListItem>,
  <ListItem key="step2">
    Once downloaded and installed, open it and press the button <Code>Connect with Rust+</Code>.
  </ListItem>,
];

export const unorderedItems2 = [
  <ListItem key="step3">Another window will pop up where you need to login with your Steam Account.</ListItem>,
];

export const unorderedItems3 = [
  <ListItem key="step4">
    When you have logged in, you should be greeted with a window that display the Slash Command /credentials add .....
  </ListItem>,
  <ListItem key="step5">
    Click <Code>Copy</Code> to copy the Slash Command.
  </ListItem>,
];

export const unorderedItems4 = [
  <ListItem key="step6">
    Paste the Slash command in your Discord Server Text Channel. Which Text Channel you run the Slash Command is not
    important, as long as the bot has access to it.
  </ListItem>,
];

export const unorderedItems5 = [
  <ListItem key="step7">
    This process is the same for the owner of the bot as well as any teammate that want to register their credentials
    &#40;mainly for the purpose to extend the usage of the leader command &#41;. Once a teammate have registered their
    credentials, they just need to go inside the game and pair with the server. Which teammates that have paired with
    the server can be seen in the information channel, they should have the P icon beside their name, see below:
  </ListItem>,
];

export const unorderedItems6 = [
  <ListItem key="step8">Server Pairing Notifications</ListItem>,
  <ListItem key="step9">Smart Devices Pairing Notifications</ListItem>,
  <ListItem key="step10">Smart Alarm Notifications</ListItem>,
  <ListItem key="step11">Player Offline Death Notifications</ListItem>,
  <ListItem key="step12">Teammate Login Notifications</ListItem>,
  <ListItem key="step13">Facepunch News</ListItem>,
];
