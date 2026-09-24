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
  '/docs': {
    title: 'rustplusplus Documentation: Setup, Channels and Commands',
    description:
      'Official rustplusplus documentation, mirrored and kept in sync: installation, Discord bot setup, credentials, server pairing, channels, smart devices and commands.',
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
