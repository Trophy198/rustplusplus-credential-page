#!/usr/bin/env node
/**
 * Sync reference documentation from alexemanuelol/rustplusplus (GPL-3.0).
 *
 *   node scripts/sync-upstream-docs.mjs            # fetch docs + images from master
 *   node scripts/sync-upstream-docs.mjs --ref dev  # another branch/tag/sha
 *
 * Writes content/docs/<slug>.md with frontmatter recording the upstream file,
 * commit SHA and sync time, and mirrors docs/images/** into public/images/upstream.
 * Markdown is kept as-is except for link/image path rewrites and escaping of
 * angle-bracket placeholders that are not HTML tags.
 */
import { mkdir, writeFile, readFile, readdir, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const REPO = 'alexemanuelol/rustplusplus';
const ref = process.argv.includes('--ref') ? process.argv[process.argv.indexOf('--ref') + 1] : 'master';
const API = `https://api.github.com/repos/${REPO}`;
const RAW = `https://raw.githubusercontent.com/${REPO}`;
const OUT_DOCS = path.resolve('content/docs');
const OUT_IMG = path.resolve('public/images/upstream');

/** Sidebar order and human titles. Files not listed are still synced, after these. */
const ORDER = [
  ['installation', 'Installation'],
  ['discord_bot_setup', 'Discord Bot Setup'],
  ['credentials_web_version', 'Credentials (Web)'],
  ['credentials', 'Credentials (EXE)'],
  ['pair_and_connect_to_server', 'Pair & Connect to a Server'],
  ['battlemetrics_and_trackers', 'Battlemetrics & Trackers'],
  ['discord_text_channels', 'Discord Text Channels'],
  ['smart_devices', 'Smart Devices'],
  ['commands', 'Commands'],
  ['full_list_features', 'Full List of Features'],
];
const SKIP = new Set(['documentation']); // table of contents; we generate our own

const headers = { 'User-Agent': 'rustplusplus-credentials-sync', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function json(url) {
  const r = await fetch(url, { headers });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}
async function text(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
}
async function bytes(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return Buffer.from(await r.arrayBuffer());
}

const slugOf = (file) => file.replace(/\.md$/, '').replace(/_/g, '-');
const HTML_TAGS =
  /^(br|img|a|b|i|em|strong|code|pre|p|div|span|details|summary|sub|sup|kbd|ul|ol|li|table|thead|tbody|tr|td|th|h[1-6]|hr|blockquote)\b/i;

function transform(md, file) {
  const lines = md.split('\n');
  let title = null;
  // First H1 becomes the title.
  const h1 = lines.findIndex((l) => /^# /.test(l));
  if (h1 !== -1) {
    title = lines[h1].replace(/^# /, '').trim();
    lines.splice(h1, 1);
  }
  let body = lines.join('\n').trim();

  // Images: images/foo/bar.png -> /images/upstream/foo/bar.png
  body = body.replace(/\]\((?:\.\/)?images\//g, '](/images/upstream/');
  // Inter-doc links: (name.md#anchor) -> (/docs/name-with-dashes#anchor)
  body = body.replace(/\]\((?:\.\/)?([a-z0-9_]+)\.md(#[^)]*)?\)/gi, (_, f, a) => `](/docs/${slugOf(f)}${a ?? ''})`);
  // Placeholders like <name or part of name> are not HTML; escape them, but
  // leave code spans and fenced blocks alone (markdown treats those literally).
  body = body
    .split(/(```[\s\S]*?```|`[^`\n]*`)/)
    .map((part, i) =>
      i % 2 === 1
        ? part
        : part.replace(/<([^>\n]+)>/g, (m, inner) =>
            HTML_TAGS.test(inner) || /^\//.test(inner) ? m : `&lt;${inner}&gt;`,
          ),
    )
    .join('');

  const firstPara = body
    .split(/\n\s*\n/)
    .map((p) =>
      p
        .replace(/^>\s?/gm, '')
        .replace(/[*_`#[\]]/g, '')
        .replace(/\([^)]*\)/g, '')
        .trim(),
    )
    .find((p) => p.length > 40 && !p.startsWith('!') && !p.startsWith('-') && !p.startsWith('|'));
  const description = (firstPara ?? '').replace(/\s+/g, ' ').slice(0, 155);
  return { title, description, body };
}

async function main() {
  const commit = await json(`${API}/commits/${ref}`);
  const sha = commit.sha;
  const syncedAt = new Date().toISOString();
  const tree = await json(`${API}/git/trees/${sha}?recursive=1`);
  const files = tree.tree.filter((t) => t.type === 'blob' && /^docs\/[^/]+\.md$/.test(t.path));
  const images = tree.tree.filter((t) => t.type === 'blob' && t.path.startsWith('docs/images/'));

  await mkdir(OUT_DOCS, { recursive: true });
  // Remove previously synced docs so deletions upstream propagate.
  if (existsSync(OUT_DOCS)) {
    for (const f of await readdir(OUT_DOCS)) {
      const p = path.join(OUT_DOCS, f);
      const head = (await readFile(p, 'utf8')).slice(0, 400);
      if (head.includes('upstream:')) await unlink(p);
    }
  }

  let n = 0;
  for (const f of files) {
    const name = path.basename(f.path, '.md');
    if (SKIP.has(name)) continue;
    const md = await text(`${RAW}/${sha}/${f.path}`);
    const { title, description, body } = transform(md, name);
    const idx = ORDER.findIndex(([k]) => k === name);
    const displayTitle = idx !== -1 ? ORDER[idx][1] : (title ?? name);
    const fm = [
      '---',
      `title: ${JSON.stringify(displayTitle)}`,
      `pageTitle: ${JSON.stringify(title ?? displayTitle)}`,
      `description: ${JSON.stringify(description)}`,
      `order: ${idx === -1 ? 100 : idx + 1}`,
      `upstream: ${JSON.stringify(`https://github.com/${REPO}/blob/${sha}/${f.path}`)}`,
      `upstreamPath: ${JSON.stringify(f.path)}`,
      `upstreamSha: ${JSON.stringify(sha)}`,
      `syncedAt: ${JSON.stringify(syncedAt)}`,
      'license: GPL-3.0',
      'ads: false',
      '---',
      '',
    ].join('\n');
    await writeFile(path.join(OUT_DOCS, `${slugOf(name)}.md`), fm + body + '\n');
    n++;
  }

  let m = 0;
  for (const img of images) {
    const rel = img.path.replace(/^docs\/images\//, '');
    const dest = path.join(OUT_IMG, rel);
    await mkdir(path.dirname(dest), { recursive: true });
    if (existsSync(dest)) continue;
    await writeFile(dest, await bytes(`${RAW}/${sha}/${img.path}`));
    m++;
  }
  await writeFile(
    path.join(OUT_DOCS, '.sync.json'),
    JSON.stringify({ repo: REPO, ref, sha, syncedAt, docs: n, imagesDownloaded: m }, null, 2) + '\n',
  );
  console.log(`synced ${n} docs, ${m} new images from ${REPO}@${sha.slice(0, 7)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
