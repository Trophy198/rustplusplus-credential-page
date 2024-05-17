import { TableColumnType, TableRowType } from '@/types/tableComponentTypes';

export const slashCommandsColumns: TableColumnType[] = [
  {
    key: 'slash-command',
    label: 'Slash Command',
  },
  {
    key: 'description',
    label: 'Description',
  },
];

export const slashCommandsRows: TableRowType[] = [
  {
    key: '1',
    'slash-command': '/alarm',
    description: 'Operations on Smart Alarms.',
  },
  {
    key: '2',
    'slash-command': '/alias',
    description: 'Create an alias for a command/sequence of characters.',
  },
  {
    key: '3',
    'slash-command': '/blacklist',
    description: 'Blacklist a user from using the bot.',
  },
  {
    key: '4',
    'slash-command': '/cctv',
    description: 'Posts CCTV codes for a monument.',
  },
  {
    key: '5',
    'slash-command': '/craft',
    description: 'Display the cost to craft an item.',
  },
  {
    key: '6',
    'slash-command': '/credentials',
    description: 'Set/Clear the FCM Credentials for the user account.',
  },
  {
    key: '7',
    'slash-command': '/decay',
    description: 'Display the decay time of an item.',
  },
  {
    key: '8',
    'slash-command': '/help',
    description: 'Display help message.',
  },
  {
    key: '9',
    'slash-command': '/item',
    description: 'Get the details of an item.',
  },
  {
    key: '10',
    'slash-command': '/leader',
    description: 'Give or take the leadership from/to a team member.',
  },
  {
    key: '11',
    'slash-command': '/map',
    description: 'Get the currently connected server map image.',
  },
  {
    key: '12',
    'slash-command': '/market',
    description: 'Operations for In-Game Vending Machines.',
  },
  {
    key: '13',
    'slash-command': '/players',
    description: 'Get player/players information based on battlemetrics.',
  },
  {
    key: '14',
    'slash-command': '/recycle',
    description: 'Display the output of recycling an item.',
  },
  {
    key: '15',
    'slash-command': '/research',
    description: 'Display the cost to research an item.',
  },
  {
    key: '16',
    'slash-command': '/reset',
    description: 'Reset Discord channels.',
  },
  {
    key: '17',
    'slash-command': '/role',
    description: 'Set/Clear a specific role that will be able to see the rustplusplus category content.',
  },
  {
    key: '18',
    'slash-command': '/storagemonitor',
    description: 'Operations on Storage Monitors.',
  },
  {
    key: '19',
    'slash-command': '/switch',
    description: 'Operations on Smart Switches.',
  },
  {
    key: '20',
    'slash-command': '/upkeep',
    description: 'Get the upkeep cost of an item.',
  },
  {
    key: '21',
    'slash-command': '/uptime',
    description: 'Display uptime of the bot and server.',
  },
  {
    key: '22',
    'slash-command': '/voice',
    description: 'Operations on Voice Feature.',
  },
];

export const inGameCommandsColumns: TableColumnType[] = [
  {
    key: 'in-game-command',
    label: 'In-Game Command',
  },
  {
    key: 'description',
    label: 'Description',
  },
];

export const inGameCommandsRows: TableRowType[] = [
  {
    key: '1',
    'in-game-command': 'afk',
    description: 'Get the currently afk players in your team.',
  },
  {
    key: '2',
    'in-game-command': 'alive',
    description: 'Get the player with the longest time alive.',
  },
  {
    key: '3',
    'in-game-command': 'cargo',
    description: 'Get information about CargoShip (Location, time till enters egress stage, time since last on map).',
  },
  {
    key: '4',
    'in-game-command': 'chinook',
    description: 'Get information about Chinook 47 (Location, time since last on map).',
  },
  {
    key: '5',
    'in-game-command': 'connection/connections',
    description: 'Get recent connection events.',
  },
  {
    key: '6',
    'in-game-command': 'craft',
    description: 'Display the cost to craft an item.',
  },
  {
    key: '7',
    'in-game-command': 'death/deaths',
    description: 'Get recent death events.',
  },
  {
    key: '8',
    'in-game-command': 'decay',
    description: 'Display the decay time of an item.',
  },
  {
    key: '9',
    'in-game-command': 'events',
    description: 'Get recent events.',
  },
  {
    key: '10',
    'in-game-command': 'heli',
    description: 'Get information about Patrol Helicopter (Location, time since last downed, time since last on map).',
  },
  {
    key: '11',
    'in-game-command': 'large',
    description: 'Get information about Large Oil Rig (Time till crate unlocks, time since last trigger).',
  },
  {
    key: '12',
    'in-game-command': 'leader',
    description: 'Give/Take the Team Leadership.',
  },
  {
    key: '13',
    'in-game-command': 'marker',
    description: 'Set custom markers anywhere on the map.',
  },
  {
    key: '14',
    'in-game-command': 'market',
    description: 'Search for items in vending machines or subscribe/unsubscribe to items.',
  },
  {
    key: '15',
    'in-game-command': 'mute',
    description: 'Mute the bot from the In-Game Team Chat.',
  },
  {
    key: '16',
    'in-game-command': 'note/notes',
    description: 'Create notes about meaningful things.',
  },
  {
    key: '17',
    'in-game-command': 'offline',
    description: 'Get the currently offline players in your team.',
  },
  {
    key: '18',
    'in-game-command': 'online',
    description: 'Get the currently online players in your team.',
  },
  {
    key: '19',
    'in-game-command': 'player/players',
    description: 'Get the names and playtime of the currently online players on the server (Based on Battlemetrics).',
  },
  {
    key: '20',
    'in-game-command': 'pop',
    description: 'Get the current population of the server including queue size and max population.',
  },
  {
    key: '21',
    'in-game-command': 'prox',
    description: 'Get the distance to the three closest teammates.',
  },
  {
    key: '22',
    'in-game-command': 'recycle',
    description: 'Display the output of recycling an item.',
  },
  {
    key: '23',
    'in-game-command': 'research',
    description: 'Display the cost to research an item.',
  },
  {
    key: '24',
    'in-game-command': 'send',
    description: 'Send a message to a discord user.',
  },
  {
    key: '25',
    'in-game-command': 'small',
    description: 'Get information about Small Oil Rig (Time till crate unlocks, time since last trigger).',
  },
  {
    key: '26',
    'in-game-command': 'steamid',
    description: 'Get the steamid of a teammate.',
  },
  {
    key: '27',
    'in-game-command': 'team',
    description: 'Get the names of all members in the team.',
  },
  {
    key: '28',
    'in-game-command': 'time',
    description: 'Get the current time In-Game and time till day/night.',
  },
  {
    key: '29',
    'in-game-command': 'timer',
    description: 'Set custom timers that will notify whenever the timer have expired.',
  },
  {
    key: '30',
    'in-game-command': 'tr',
    description: 'Translate a text to another language.',
  },
  {
    key: '31',
    'in-game-command': 'trf',
    description: 'Translate a text from one language to another.',
  },
  {
    key: '32',
    'in-game-command': 'tts',
    description: 'Send a Text-To-Speech message to the Discord teamchat channel.',
  },
  {
    key: '33',
    'in-game-command': 'unmute',
    description: 'Unmute the bot from the In-Game Team Chat.',
  },
  {
    key: '34',
    'in-game-command': 'unkeep',
    description: 'Get the upkeep time of all connected tool cupboard monitors.',
  },
  {
    key: '35',
    'in-game-command': 'uptime',
    description: 'Display uptime of the bot and server.',
  },
  {
    key: '36',
    'in-game-command': 'wipe',
    description: 'Get the time since it was wiped.',
  },
];