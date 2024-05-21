import Code from '@/components/document/code/code';
import ListItem from '@/components/document/listItem/listItem';

export const getApplicationSetupSteps = () => [
  <ListItem key="step1">
    Go to{' '}
    <a href="https://discord.com/developers/applications" target="_blank">
      <Code>Discord Developers Applications</Code>
    </a>
    .
  </ListItem>,
  <ListItem key="step2">
    Click on the button <Code>New Application</Code>.
  </ListItem>,
];

export const getBotCreationStep = () => [
  <ListItem key="step3">
    Enter the name for the Bot and click <Code>Create</Code>.
  </ListItem>,
];

export const getApplicationIdSetupStep = () => [
  <ListItem key="step4">
    Copy the <Code>APPLICATION ID</Code> to the config/index.js file located in repository folder
    <Code>rustplusplus/config/index.js</Code>.
  </ListItem>,
];

export const getBotSetupStep = () => [
  <ListItem key="step5">
    Click on <Code>Bot</Code> and then on <Code>Add Bot</Code>.
  </ListItem>,
];

export const getBotConfirmationStep = () => [
  <ListItem key="step6">
    Click on <Code>Yes, do it!</Code>.
  </ListItem>,
];

export const getTokenResetStep = () => [
  <ListItem key="step7">
    Click on <Code>Reset Token</Code> and then <Code>Yes, do it!</Code>.
  </ListItem>,
];

export const getTokenSetupStep = () => [
  <ListItem key="step8">
    Copy the <Code>TOKEN</Code> to the config/index.js file located in repository folder{' '}
    <Code>rustplusplus/config/index.js</Code>.
  </ListItem>,
];

export const getGatewayIntentSetupStep = () => [
  <ListItem key="step9">
    Scroll down to <Code>Privileged Gateway Intents</Code> and enable them all.
  </ListItem>,
];

export const getOAuth2SetupStep = () => [
  <ListItem key="step10">
    Click on <Code>OAuth2</Code> and then <Code>URL Generator</Code>.
  </ListItem>,
];

export const getScopeSelectionStep = () => [
  <ListItem key="step11">
    Under <Code>SCOPES</Code> select <Code>bot</Code> and <Code>applications.commands</Code>.
  </ListItem>,
];

export const getBotPermissionsStep = () => [
  <ListItem key="step12">
    Under <Code>BOT PERMISSIONS</Code> select <Code>Administrator</Code>.
  </ListItem>,
];

export const getGeneratedUrlStep = () => [
  <ListItem key="step13">
    Copy the <Code>GENERATED URL</Code> and paste it into your URL browser.
  </ListItem>,
];

export const getBotAdditionStep = () => [
  <ListItem key="step14">
    Add the bot to desired Discord Server and click <Code>Continue</Code>.
  </ListItem>,
];

export const getAuthorizationStep = () => [
  <ListItem key="step15">
    Click on <Code>Authorise</Code>.
  </ListItem>,
];

export const getBotVisibilityStep = () => [
  <ListItem key="step16">The Bot should now be visible in your Discord Server.</ListItem>,
];

export const getBotStartStep = () => [
  <ListItem key="step17">
    Start the bot by running <Code>npm start run</Code> in the terminal &#40;First time running the bot will create all
    of the missing discord text channels&#41;.
  </ListItem>,
];
