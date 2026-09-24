#!/usr/bin/env node
/**
 * Generate public/sitemap.xml from static routes plus every content entry.
 * Runs as `prebuild` so the sitemap always matches what gets deployed.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const SITE_URL = (readFileSync('src/lib/site.ts', 'utf8').match(/SITE_URL = '([^']+)'/) ?? [])[1];
if (!SITE_URL) throw new Error('SITE_URL not found in src/lib/site.ts');

const entries = [
  { loc: '/', priority: '1.0' },
  { loc: '/docs', priority: '0.8' },
];

const collect = (dir, base, priority) => {
  if (!existsSync(dir)) return;
  for (const f of readdirSync(dir).filter((f) => /\.mdx?$/.test(f))) {
    const slug = f.replace(/\.mdx?$/, '');
    const raw = readFileSync(path.join(dir, f), 'utf8');
    const lastmod = (raw.match(/^(?:syncedAt|updated):\s*"?(\d{4}-\d{2}-\d{2})/m) ?? [])[1];
    entries.push({ loc: `${base}${slug}`, priority, lastmod });
  }
};
collect('content/docs', '/docs/', '0.7');
collect('content/guides', '/guides/', '0.8');
collect('content/pages', '/', '0.3');

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries
    .map(
      (e) =>
        `  <url><loc>${SITE_URL}${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}<priority>${e.priority}</priority></url>`,
    )
    .join('\n') +
  '\n</urlset>\n';

writeFileSync('public/sitemap.xml', xml);
console.log(`sitemap: ${entries.length} urls`);
