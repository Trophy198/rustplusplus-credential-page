/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Old hand-written docs routes -> synced upstream docs.
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r('/documents', '/docs'),
      r('/documents/getting-started', '/docs'),
      r('/documents/getting-started/installation', '/docs/installation'),
      r('/documents/getting-started/discord-bot-setup', '/docs/discord-bot-setup'),
      r('/documents/getting-started/fcm-credentials', '/docs/credentials-web-version'),
      r('/documents/getting-started/pair-and-connect-to-a-server', '/docs/pair-and-connect-to-server'),
      r('/documents/discord-text-channels', '/docs/discord-text-channels'),
      r('/documents/commands', '/docs/commands'),
      r('/documents/commands/discord-slash-commands', '/docs/commands#discord-slash-commands'),
      r('/documents/commands/in-game-commands', '/docs/commands#in-game-commands'),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.steamstatic.com',
      },
    ],
  },
};

export default nextConfig;
