import {
  teamMemberInformationImage,
  serverChannel,
  settingsChannel,
  commandsChannel,
  eventsChannel,
  teamChatChannel,
  activityChannel,
  trackerCreate,
  trackersChannel,
  smartSwitch,
  smartSwitchGroup,
  smartAlarm,
  storageMonitor,
  storageMonitorContainer,
  unreachableDevice,
} from '@/data/documents/discordTextChannels/images';
import applyCodeTag from '@/components/document/pages/discordTextChannels/applyCodeTag';
import { DiscordTextChannelsDataType } from '@/types/discordTextChannelsDataTypes';

export const discordTextChannelsData: DiscordTextChannelsDataType[] = [
  {
    id: 'Discord-Text-Channels',
    heading: 'Discord Text Channels',
    lists: [
      {
        data: [
          'Information',
          'Servers',
          'Settings',
          'Commands',
          'Events',
          'TeamChat',
          'SmartDevices',
          'SmartSwitches',
          'SmartSwitchGroups',
          'SmartAlarms',
          'StorageMonitors',
          'UnreachableSmartDevices',
          'Activity',
          'Trackers',
        ],
      },
    ],
  },
  {
    id: 'Information',
    heading: 'Information Channel',
    blockquote: applyCodeTag(
      'The Information Channel present information about the currently connected Rust Server. It is split up into four sections, The Map, Server Information, Event Information and Team Member Information (See below).',
      ['The Map', 'Server Information', 'Event Information', 'Team Member Information'],
    ),
    paragraphs: [
      { strong: 'The Map', text: 'is simply an image of the Rust Server Map.' },
      { strong: 'Battlemetrics Online Players', text: 'shows all online players on the server.' },
    ],
    lists: [
      {
        title: { strong: 'Server Information', text: 'is just that, information about the server such as:' },
        data: [
          'Players currently online',
          'Time In-Game',
          'How long ago Map Wipe was',
          'Time till day/night',
          'Map Size',
          'Map Seed',
          'Map Salt',
          'Map Name',
          'Connect information for join through In-Game console',
        ],
      },
      {
        title: { strong: 'Event Information', text: 'shows event activities In-Game such as:' },
        data: ['Cargoship', 'Patrol Helicopter', 'Small Oil Rig', 'Large Oil Rig', 'Chinook 47'],
      },
    ],
    images: [{ src: teamMemberInformationImage, alt: 'teamMemberInformationImage' }],
  },
  {
    id: 'Servers',
    heading: 'Servers Channel',
    blockquote: applyCodeTag(
      'The Server Channel lists all the paired Rust Servers. Given that you have setup your FCM Credentials properly, once you pair a Rust Server In-Game via ESC -> Rust+ -> Pair With Server, it should automatically appear in the servers channel. From there you can decide which server you want the bot to connect to by clicking the CONNECT button for that server.',
      ['ESC -> Rust+ -> Pair With Server', 'servers', 'CONNECT'],
    ),
    paragraphs: [
      {
        text: applyCodeTag(
          'The server embed displays a bunch of information. The title of the embed is the name of the server. The Battlemetrics Id is also displayed as well as if the server is streamer mode or not. The Description of the embed is basically the description of the Rust Server. Here you can also find the connect information that could be found in information channel. You can also see who is the hoster of the bot for the server.',
          ['information channel'],
        ),
      },
      {
        text: applyCodeTag(
          'There are a few buttons for each server. The CONNECT button lets you start a connection to the server. Once connected you can disconnect by clicking the DISCONNECT button. By clicking the WEBSITE button, you will be re-directed to the Rust Servers website. By clicking the BATTLEMETRICS button, you will be re-directed to the Battlemetrics page for the Rust Server. By clicking the EDIT button, you can change the Battlemetrics Id for the server. By clicking the CUSTOM TIMERS button, you can change Custom Timers for Cargoship egress time and time before a Locked Crate at Oil Rig is unlocked. By clicking the CREATE TRACKER button, you create a battlemetrics tracker that will appear in the trackers Text-Channel on Discord. By clicking the CREATE GROUP button, you create a Smart Switch Group that can be used to manage several Smart Switches at once. The Smart Switch Group will appear in the switchgroups Text-Channel on Discord. To remove the Server, just click the trashcan button.',
          [
            'CONNECT',
            'DISCONNECT',
            'WEBSITE',
            'EDIT',
            'BATTLEMETRICS',
            'Battlemetrics Id',
            'CUSTOM TIMERS',
            'CREATE TRACKER',
            'trackers',
            'CREATE GROUP',
            'switchgroups',
          ],
        ),
      },
    ],
    images: [{ src: serverChannel, alt: 'serverChannel' }],
  },
  {
    id: 'Settings',
    heading: 'Settings Channel',
    blockquote:
      'The Settings Channel contain a bunch of different settings for rustplusplus. There are settings for language, voice gender, command prefix, trademark visibility, allow in-game commands, mute in-game, in-game teammate notifications, command delay, Smart Alarm notifications, enable leader command, battlemetrics notifications, wipe detection, vending machine subscription and event notifications.',
    images: [{ src: settingsChannel, alt: 'settingsChannel' }],
  },
  {
    id: 'Commands',
    heading: 'Commands Channel',
    blockquote: 'The Commands Channel allows you to run In-Game Commands straight from Discord.',
    images: [{ src: commandsChannel, alt: 'commandsChannel' }],
  },
  {
    id: 'Events',
    heading: 'Events Channel',
    blockquote: 'The Events Channel contains all the event notifications that occurs such as:',
    lists: [
      {
        data: [
          'Cargoship spawn',
          'Cargoship despawn',
          'Cargoship enters egress stage',
          'Patrol Helicopter spawn',
          'Patrol Helicopter despawn',
          'Patrol Helicopter destroyed',
          'Locked Crate at Oil Rig Unlocked',
          'Oil Rig have been triggered',
          'Chinook 47 spawn',
          'New Vending Machine detected',
        ],
      },
    ],
    images: [{ src: eventsChannel, alt: 'eventsChannel' }],
  },
  {
    id: 'TeamChat',
    heading: 'TeamChat Channel',
    blockquote: applyCodeTag(
      'The Teamchat Channel makes it possible to communicate with your teammates In-Game. What you write in teamchat Channel appears In-Game and whatever you write In-Game appears in the teamchat Channel.',
      ['teamchat'],
    ),
    images: [{ src: teamChatChannel, alt: 'teamChatChannel' }],
  },
  {
    id: 'SmartDevices',
    heading: 'Smart Devices',
    blockquote: applyCodeTag(
      `Smart Devices is an umbrella term for three different devices, Smart Switches, Smart Alarms and Storage Monitors. To pair a Smart Device with rustplusplus, make sure you've setup the FCM-Credentials. When the FCM-Credentials are setup, you just need a wire tool and start pairing like you would with the Rust+ Companion App. Once you've paired your Smart Devices, they should appear in their respective Discord Text-Channel (switches, alarms or storagemonitors).`,
      ['Smart Switches', 'Smart Alarms', 'Storage Monitors', 'switches', 'alarms', 'storagemonitors'],
      ['setup the FCM-Credentials', 'Rust+ Companion App'],
      ['getting-started/fcm-credentials', 'https://rust.facepunch.com/companion'],
    ),
    paragraphs: [
      {
        text: applyCodeTag(
          'It is possible to change the display image for all the different Smart Devices by running the corresponding Slash Command. The Slash Commands to change Smart Device images is /switch, /alarm and /storagemonitor.',
          ['/switch', '/alarm', '/storagemonitor'],
        ),
      },
    ],
  },
  {
    id: 'SmartSwitches',
    heading: 'Smart Switches Channel',
    blockquote: applyCodeTag(
      'Paired Smart Switches can be located in the switches Text-Channel on Discord. Only Smart Switches from the currently/last connected Rust server will be shown in the channel.',
      ['switches'],
    ),
    paragraphs: [
      {
        text: applyCodeTag(
          'The image above is what a paired Smart Switch looks like in Discord. In this case the Smart Switch is called Switch and is located at E16. All Smart Devices have an Entity Id which is used to identify it. The Custom Command for this switch is !sw which can be used from the in-game teamchat.',
          ['Switch', '!sw'],
        ),
      },
      {
        text: applyCodeTag(
          'The Smart Switch can be turned ON/OFF by clicking the TURN ON / TURN OFF button at the bottom. By clicking on the EDIT button, you can edit things such as the Name and the Custom Command for the Smart Switch. If the AUTO SETTING is set to either AUTO-ON-PROXIMITY or AUTO-OFF-PROXIMITY, there will be a proximity setting available to edit. The proximity setting is used to turn the switch ON/OFF when a teammate is within the proximity of the Smart Switch. To remove the Smart Switch, just click the trashcan button.',
          [
            'TURN ON',
            'TURN OFF',
            'EDIT',
            'Name',
            'Custom Command',
            'AUTO SETTING',
            'AUTO-ON-PROXIMITY',
            'AUTO-OFF-PROXIMITY',
          ],
        ),
      },
    ],
    lists: [
      {
        title: { text: 'There are a few auto settings for Smart Switches:' },
        data: [
          applyCodeTag('OFF - Smart Switch work as normal.', ['OFF']),
          applyCodeTag('AUTO-DAY - Smart Switch will be active only during the day.', ['AUTO-DAY']),
          applyCodeTag('AUTO-NIGHT - Smart Switch will be active only during the night.', ['AUTO-NIGHT']),
          applyCodeTag('AUTO-ON - Smart Switch will automatically go active during update cycle.', ['AUTO-ON']),
          applyCodeTag('AUTO-OFF - Smart Switch will automatically go inactive during update cycle.', ['AUTO-OFF']),
          applyCodeTag(
            'AUTO-ON-PROXIMITY - Smart Switch will automatically go active if teammate is in proximity, if outside proximity it will go inactive.',
            ['AUTO-ON-PROXIMITY'],
          ),
          applyCodeTag(
            'AUTO-OFF-PROXIMITY - Smart Switch will automatically go inactive if teammate is in proximity, if outside proximity it will go active.',
            ['AUTO-OFF-PROXIMITY'],
          ),
          applyCodeTag(
            'AUTO-ON-ANY-ONLINE - Smart Switch will automatically go active if any teammate is online, if all offline it will go inactive.',
            ['AUTO-ON-ANY-ONLINE'],
          ),
          applyCodeTag(
            'AUTO-OFF-ANY-ONLINE - Smart Switch will automatically go inactive if any teammate is online, if all offline it will go active.',
            ['AUTO-OFF-ANY-ONLINE'],
          ),
        ],
      },
      {
        title: {
          text: applyCodeTag(
            'Smart Switches can also be controlled from within the game through teamchat via custom commands. Custom command call combinations for the Smart Switch Switch are shown below:',
            ['Switch'],
          ),
        },
        data: [
          applyCodeTag('!sw - To toggle the switch.', ['!sw']),
          applyCodeTag('!sw 60s - To toggle the switch and then toggle it back after 60 seconds.', ['!sw 60s']),
          applyCodeTag('!sw on - To turn the switch ON.', ['!sw on']),
          applyCodeTag('!sw off - To turn the switch OFF.', ['!sw off']),
          applyCodeTag('!sw on 60s - To turn the switch ON and automatically turn it OFF after 60 seconds.', [
            '!sw on 60s',
          ]),
          applyCodeTag('!sw off 60s - To turn the switch OFF and automatically turn it ON after 60 seconds.', [
            '!sw off 60s',
          ]),
          applyCodeTag('!sw status - To get the current status of the switch.', ['!sw status']),
        ],
      },
    ],
    images: [{ src: smartSwitch, alt: 'smartSwitch' }],
  },
  {
    id: 'SmartSwitchGroups',
    heading: 'Smart Switch Groups Channel',
    blockquote:
      'Smart Switch Groups is a feature that allows you to control multiple Smart Switches at once. The image below is what a Smart Switch Group looks like in Discord.',
    paragraphs: [
      {
        text: applyCodeTag(
          'To create a Smart Switch Group, click the CREATE GROUP button located under appropriate server in the servers Text-Channel on Discord. This will create the Smart Switch Group embed above located in the switchgroups Text-Channel on Discord. The Group above is called Turrets and have the entity id 518. The Custom Command for this group is !t and the Group have three Smart Switches connected to it.',
          ['CREATE GROUP', 'servers', 'switchgroups', '!t'],
        ),
      },
      {
        text: applyCodeTag(
          'The Smart Switch Group can be turned ON/OFF by clicking the TURN ON / TURN OFF button at the bottom. By clicking on the EDIT button, you can edit things such as the Name and the Custom Command for the Smart Switch Group. To add a Smart Switch to the Group you click the ADD SWITCH button and if you want to remove a Smart Switch from the Group you click the REMOVE SWITCH button. You provide the entity id of the Smart Switch you want to add/remove. To remove the Smart Switch Group, just click the trashcan button.',
          ['TURN ON', 'TURN OFF', 'EDIT', 'Name', 'Custom Command', 'ADD SWITCH', 'REMOVE SWITCH'],
        ),
      },
    ],
    lists: [
      {
        title: {
          text: applyCodeTag(
            'Smart Switch Groups can also be controlled from within the game through teamchat via custom commands. Custom command call combinations for the Smart Switch Group Turrets are shown below:',
            ['Turrets'],
          ),
        },
        data: [
          applyCodeTag('!t on - To turn all the switches in the group ON.', ['!t on']),
          applyCodeTag('!t off - To turn all the switches in the group OFF.', ['!t off']),
          applyCodeTag(
            '!t on 60s - To turn all the switches in the group ON and automatically turn them OFF after 60 seconds.',
            ['!t on 60s'],
          ),
          applyCodeTag(
            '!t off 60s - To turn all the switches in the group OFF and automatically turn them ON after 60 seconds.',
            ['!t off 60s'],
          ),
          applyCodeTag('!t status - To get status of all Smart Switches in the group.', ['!t status']),
        ],
      },
    ],
    images: [{ src: smartSwitchGroup, alt: 'smartSwitchGroup' }],
  },
  {
    id: 'SmartAlarms',
    heading: 'Smart Alarms Channel',
    blockquote: applyCodeTag(
      'Paired Smart Alarms can be located in the alarms Text-Channel on Discord. All Smart Alarms from all servers will be shown in the channel.',
      ['alarms'],
    ),
    paragraphs: [
      {
        text: applyCodeTag(
          'The image above is what a paired Smart Alarm looks like in Discord. In this case the Smart Alarm is called Alarm and is located at E16. All Smart Devices have an Entity Id which is used to identify it. From the Last Trigger you can see when the Smart Alarm was last triggered. Under Message you can see the Message is that will be broadcast when the Smart Alarm gets triggered. The Custom Command for this alarm is !alarm which can be used from the in-game teamchat. The Custom Command will tell you when it was last triggered.',
          [],
        ),
      },
      {
        text: applyCodeTag(
          'By clicking the @everyone button you decide if the @everyone tag should be used in Discord when the Smart Alarm gets triggered. By clicking on the EDIT button, you can edit things such as the Name, Message and the Custom Command for the Smart Alarm. To remove the Smart Alarm, just click the trashcan button.',
          ['@everyone', 'EDIT', 'Name', 'Message', 'Custom Command'],
        ),
      },
      {
        text: applyCodeTag(
          'There are a few more settings for Smart Alarms that can be found in the settings channel. The first one lets you decide if Smart Alarms that are not part of the currently connected server still should notify when triggered. The second one lets you decide if Smart Alarms should notify In-Game when triggered.',
          ['settings'],
        ),
      },
    ],
    images: [{ src: smartAlarm, alt: 'smartAlarm' }],
  },
  {
    id: 'StorageMonitors',
    heading: 'Storage Monitors Channel',
    blockquote: applyCodeTag(
      'Paired Storage Monitors can be located in the storagemonitors Text-Channel on Discord. Only Storage Monitors from the currently/last connected Rust server will be shown in the channel.',
      ['storagemonitors'],
    ),
    paragraphs: [
      {
        text: applyCodeTag(
          'The images above is what paired Storage Monitors looks like in Discord. There are three types of Storage Monitors depending on where you place them. The first one is of type Tool Cupboard and works almost like the second and third type Large Wood Box and Vending Machine but with the difference that it shows upkeep. In both cases the Name of the Storage Monitors is Storage Monitor and can be located at E16. All Smart Devices have an Entity Id which is used to identify it. It also shows how many slots the Storage Monitor has and how many of them are occupied. Lastly the Storage Monitor shows the content inside it, the items and quantity.',
          ['Tool Cupboard', 'Large Wood Box', 'Vending Machine', 'Name', 'Storage Monitor'],
        ),
      },
      {
        text: applyCodeTag(
          'Tool Cupboard type Storage Monitor have the @everyone button that lets you decide if @everyone tag should be used in Discord when the Tool Cupboard starts to decay. By clicking on the IN-GAME button, you decide if decay notifications should be made In-Game as well.',
          ['@everyone', 'IN-GAME'],
        ),
      },
      {
        text: applyCodeTag(
          'Container type Storage Monitor have the RECYCLE button which lets you calculate what resources you would get if you recycled the content of the container.',
          ['RECYCLE'],
        ),
      },
      {
        text: applyCodeTag(
          'By clicking on the EDIT button, you can edit the Name of the Storage Monitor. To remove the Storage Monitor, just click the trashcan button.',
          ['EDIT', 'Name'],
        ),
      },
    ],
    images: [
      { src: storageMonitor, alt: 'storageMonitor' },
      { src: storageMonitorContainer, alt: 'storageMonitorContainer' },
    ],
  },
  {
    id: 'UnreachableSmartDevices',
    heading: 'UnreachableDevices',
    blockquote: applyCodeTag(
      `When a Smart Devices gets removed, the hoster loses building privilege to the Smart Device or rustplusplus just don't get a response from pinging it, the device is unreachable. In the image below you can see the Smart Switch Switch can no longer be reached. In this case its because of a force wipe, The Smart Switch does no longer exist. If the Smart Device is unreachable because the hoster lost building privilege, gaining building privilege again will make the device reachable again. But if the Smart Device was removed from where it was placed you might as well remove it from Discord, once a Smart Device gets removed the Entity Id is invalid. Even if you place the same Smart Device, the Entity Id will be different.`,
      ['Switch'],
    ),
    images: [{ src: unreachableDevice, alt: 'unreachableDevice' }],
  },
  {
    id: 'Activity',
    heading: 'Activity Channel',
    blockquote:
      'The Activity Channel is used to display a bunch of different things such as team member joined/ left/ connected/ disconnected/ killed/ offline killed, Not found notifications from Smart Devices, Smart Alarm notifications, Decaying notifications, Tracker information, Server went down/up notifications, facepunch news, Battlemetrics notifications etc...',
    images: [{ src: activityChannel, alt: 'activityChannel' }],
  },
  {
    id: 'Trackers',
    heading: 'Trackers Channel',
    blockquote: applyCodeTag(
      'The Trackers Channel is used to keep track of players or groups on a specific server (Online/Offline/playtime/offlinetime). To create a tracker, just click on the CREATE TRACKER button located in the servers channel. The new tracker will appear in the trackers channel.',
      ['CREATE TRACKER', 'servers'],
    ),
    paragraphs: [
      {
        text: applyCodeTag(
          'The Tracker embed displays a few things. The Title of the embed is the name of the Tracker. The Tracker embed also displays the Battlemetrics Id of the tracker, the Server ID, Server status, streamer mode on/off and potential Clan Tag setting. Under that, all players in the tracker are displayed. The Names, Steam ID / Battlemetrics ID and Status of every player.',
          ['Names', 'Steam ID / Battlemetrics ID', 'Status'],
        ),
      },
      {
        text: applyCodeTag(
          'By clicking the ADD PLAYER button, you can add a player to the tracker by providing the steamId or battlemetrics player id. By clicking the REMOVE PLAYER button, you can remove a player from the tracker by providing the steamId or battlemetrics player id. To make the tracker more accurate and make it easier to detect name changes, we recommend using steamID for the tracker. By clicking the EDIT button, you can change the Name of the tracker, the Battlemetrics Id of the tracker and the Clan Tag for all the players in the tracker. To remove the tracker, click the trashcan button. By clicking the IN-GAME button, you let the tracker notify in teamchat. By clicking the @everyone button, you decide if the @everyone tag should be used whenever a person connect/disconnect.',
          ['ADD PLAYER', 'REMOVE PLAYER', 'EDIT', 'Name', 'Battlemetrics Id', 'Clan Tag', 'IN-GAME', '@everyone'],
        ),
      },
    ],
    images: [
      { src: trackerCreate, alt: 'trackerCreate' },
      { src: trackersChannel, alt: 'trackersChannel' },
    ],
  },
];
