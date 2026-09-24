/** Site-wide constants. Update SITE_URL when the custom domain goes live. */
export const SITE_URL = 'https://rustplusplus-credentials.netlify.app';
export const SITE_NAME = 'rustplusplus';
export const DEFAULT_DESCRIPTION =
  'Get your Rust+ credentials for the rustplusplus Discord bot in one click, plus setup guides, commands and troubleshooting for Rust+ and rustplusplus.';
export const OG_IMAGE = `${SITE_URL}/images/rustplusplusLogo.png`;

/** Per-route titles and descriptions. Keys are the page paths. */
export const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'rustplusplus Credentials: Rust+ Discord Bot Setup Made Easy',
    description:
      'Generate the Rust+ FCM credentials the rustplusplus Discord bot needs, in one click with a browser extension. Free, open source, no .exe required.',
  },
  '/documents': {
    title: 'rustplusplus Documentation: Setup, Channels and Commands',
    description:
      'Everything you need to run the rustplusplus Rust+ Discord bot: installation, Discord bot setup, credentials, server pairing, channels and commands.',
  },
  '/documents/getting-started': {
    title: 'Getting Started with rustplusplus',
    description:
      'Four steps to a working rustplusplus bot: install the software, create the Discord bot, add your Rust+ credentials, pair and connect a server.',
  },
  '/documents/getting-started/installation': {
    title: 'Install rustplusplus (Node.js, Git, clone and npm install)',
    description:
      'Required software and exact commands to install the rustplusplus Discord bot on Windows, macOS or Linux.',
  },
  '/documents/getting-started/discord-bot-setup': {
    title: 'Discord Bot Setup for rustplusplus',
    description:
      'Create a Discord application, get the bot token and application ID, set intents and permissions, and invite the bot to your server.',
  },
  '/documents/getting-started/fcm-credentials': {
    title: 'Rust+ FCM Credentials for rustplusplus (Extension and EXE)',
    description:
      'How to get the Rust+ FCM credentials rustplusplus needs, using the browser extension or the desktop application, and why the bot needs them.',
  },
  '/documents/getting-started/pair-and-connect-to-a-server': {
    title: 'Pair and Connect rustplusplus to a Rust Server',
    description:
      'Pair your Rust server through the in-game Rust+ menu and connect the rustplusplus bot to it from Discord.',
  },
  '/documents/discord-text-channels': {
    title: 'rustplusplus Discord Channels Explained',
    description:
      'What each rustplusplus channel does: information, servers, settings, commands, events, team chat, smart switches, alarms, storage monitors, trackers.',
  },
  '/documents/commands': {
    title: 'rustplusplus Commands: Discord Slash and In-Game',
    description: 'Overview of every command the rustplusplus bot understands, in Discord and in Rust team chat.',
  },
  '/documents/commands/discord-slash-commands': {
    title: 'rustplusplus Discord Slash Commands Reference',
    description:
      'Full list of rustplusplus slash commands: /alarm, /switch, /storagemonitor, /players, /map, /craft, /recycle, /research, /upkeep and more.',
  },
  '/documents/commands/in-game-commands': {
    title: 'rustplusplus In-Game Commands Reference',
    description:
      'Every command you can type in Rust team chat with rustplusplus: !pop, !time, !wipe, !cargo, !heli, !leader, !tts and more.',
  },
  '/display': {
    title: 'Your Rust+ Credentials',
    description: 'Copy the /credentials add command for the rustplusplus bot.',
  },
  '/callback': {
    title: 'Creating your credentials',
    description: 'Generating Rust+ credentials for rustplusplus.',
  },
};

/** Routes that must not be indexed. */
export const NOINDEX_PATHS = new Set(['/display', '/callback']);
