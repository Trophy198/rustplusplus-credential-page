import Code from '@/components/document/code/code';
import ListItem from '@/components/document/listItem/listItem';

export const getDownloadAndInstallSteps = () => [
  <ListItem key="download-install-app">
    Download and install the{' '}
    <a href="https://github.com/alexemanuelol/rustplusplus-Credential-Application/releases/download/v1.1.0/rustPlusPlus-1.1.0-win-x64.exe">
      rustplusplus FCM Credential Application
    </a>
  </ListItem>,
  <ListItem key="open-connect-app">
    Once downloaded and installed, open it and press the button <Code>Connect with Rust+</Code>.
  </ListItem>,
];

export const getSteamLoginStep = () => [
  <ListItem key="steam-login">Another window will pop up where you need to login with your Steam Account.</ListItem>,
];

export const getCopyCredentialsSteps = () => [
  <ListItem key="display-slash-command">
    When you have logged in, you should be greeted with a window that displays the Slash Command /credentials add .....
  </ListItem>,
  <ListItem key="copy-slash-command">
    Click <Code>Copy</Code> to copy the Slash Command.
  </ListItem>,
];

export const getPasteCredentialsStep = () => [
  <ListItem key="paste-slash-command">
    Paste the Slash command in your Discord Server Text Channel. Which Text Channel you run the Slash Command is not
    important, as long as the bot has access to it.
  </ListItem>,
];

export const getTeammateRegistrationSteps = () => [
  <ListItem key="teammate-registration">
    This process is the same for the owner of the bot as well as any teammate that wants to register their credentials
    &#40;mainly for the purpose to extend the usage of the leader command&#41;. Once a teammate has registered their
    credentials, they just need to go inside the game and pair with the server. Which teammates that have paired with
    the server can be seen in the information channel; they should have the P icon beside their name, see below:
  </ListItem>,
];

export const getFcmUsageBenefits = () => [
  <ListItem key="server-pairing">Server Pairing Notifications</ListItem>,
  <ListItem key="device-pairing">Smart Devices Pairing Notifications</ListItem>,
  <ListItem key="smart-alarm">Smart Alarm Notifications</ListItem>,
  <ListItem key="offline-death">Player Offline Death Notifications</ListItem>,
  <ListItem key="teammate-login">Teammate Login Notifications</ListItem>,
  <ListItem key="facepunch-news">Facepunch News</ListItem>,
];
