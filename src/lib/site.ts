/** Site-wide constants. Update SITE_URL when the custom domain goes live. */
export const SITE_URL = 'https://rustplusplus-credentials.netlify.app';
export const SITE_NAME = 'rustplusplus';
export const DEFAULT_DESCRIPTION =
  'Get your Rust+ credentials for the rustplusplus Discord bot in one click, plus setup guides, commands and troubleshooting for Rust+ and rustplusplus.';
/**
 * Facepunch's Rust+ login, entered the way the official app does since the
 * October 2026 login rework: after Steam sign-in Facepunch redirects to
 * /app, which redirects to rust-plus://rust-auth-session?token=…&steamId=….
 * Extension 1.1.0+ catches that redirect and forwards it to /callback.
 */
export const RUST_PLUS_LOGIN_URL =
  'https://companion-rust.facepunch.com/login?returnUrl=' +
  encodeURIComponent('/app?returnUrl=' + encodeURIComponent('rust-plus://rust-auth-session'));

/** Pre-October-2026 entry point, still used for extensions older than MIN_EXTENSION_VERSION. */
export const LEGACY_LOGIN_URL = 'https://companion-rust.facepunch.com/login';

/** Oldest extension version that understands the October 2026 login flow. */
export const MIN_EXTENSION_VERSION = '1.1.0';

export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/rustplusplus-credential-a/ooahmkklkanfgfmphpknpcgdpdcoikhe';
export const FIREFOX_STORE_URL = 'https://addons.mozilla.org/en-US/firefox/addon/rustplusplus-credential-app/';

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
  '/guides': {
    title: 'Rust+ Troubleshooting Guides: Pairing, Notifications, Server Offline',
    description:
      'Fixes for the Rust+ companion app sorted by symptom, written for players: pairing, server offline, notifications, sign-in loops, smart alarms.',
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
