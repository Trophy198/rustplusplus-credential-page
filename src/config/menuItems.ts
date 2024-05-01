const menuItems = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    href: '/documents/getting-started',
    subItems: [
      {
        id: 'discord-bot-setup',
        label: 'discord-bot-setup',
        href: '/documents/getting-started/discord-bot-setup'
      },
      {
        id: 'installation',
        label: 'installation',
        href: '/documents/getting-started/installation'
      }
    ],
  },
  {
    id: 'commands',
    label: 'Commands',
    href: '/documents/commands',
    subItems: [
      {
        id: 'commands-documentation',
        label: 'Commands Documentation',
        href: '/documents/commands/commands-documentation',
        subItems: [
          {
            id: 'discord-slash-commands',
            label: 'Discord Slash Commands',
            href: '/documents/commands/commands-documentation/discord-slash-commands',
          },
          {
            id: 'in-game-commands',
            label: 'In-Game Commands',
            href: '/documents/commands/commands-documentation/in-game-commands',
          }
        ],
      },
    ],
  },
  {
    id: 'fcm-credentials-documentation',
    label: 'FCM Credentials Documentation',
    href: '/documents/fcm-credentials-documentation',
    subItems: [
      {
        id: 'retrieving-fcm-credentials',
        label: 'Retrieving FCM Credentials',
        href: '/documents/fcm-credentials-documentation/retrieving-fcm-credentials',
      },
      {
        id: 'retrieving-fcm-credentials2',
        label: 'Retrieving FCM Credentials2',
        href: '/documents/fcm-credentials-documentation/retrieving-fcm-credentials2',
      }
    ],
  },
];

export default menuItems;
