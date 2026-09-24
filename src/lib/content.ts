import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * File-based content. Collections:
 *   content/docs/*.md    reference docs synced from alexemanuelol/rustplusplus (scripts/sync-upstream-docs.mjs)
 *   content/pages/*.mdx  site pages we author (about, privacy, terms)
 *   content/guides/*.mdx original guides (phase 3)
 * Only called from getStaticProps/getStaticPaths, so `fs` is build-time only.
 */
const ROOT = path.join(process.cwd(), 'content');

export type Collection = 'docs' | 'pages' | 'guides';

export interface ContentMeta {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  order: number;
  /** Synced reference docs carry their upstream provenance. */
  upstream?: string;
  upstreamPath?: string;
  upstreamSha?: string;
  syncedAt?: string;
  license?: string;
  /** false = never place ads on this page (mirrored or transactional content). */
  ads: boolean;
  format: 'md' | 'mdx';
  updated?: string;
}

export interface ContentEntry extends ContentMeta {
  body: string;
}

const dir = (c: Collection) => path.join(ROOT, c);

function read(c: Collection, file: string): ContentEntry {
  const raw = fs.readFileSync(path.join(dir(c), file), 'utf8');
  const { data, content } = matter(raw);
  const slug = file.replace(/\.mdx?$/, '');
  return {
    slug,
    title: String(data.title ?? slug),
    pageTitle: String(data.pageTitle ?? data.title ?? slug),
    description: String(data.description ?? ''),
    order: Number(data.order ?? 100),
    upstream: data.upstream ?? undefined,
    upstreamPath: data.upstreamPath ?? undefined,
    upstreamSha: data.upstreamSha ?? undefined,
    syncedAt: data.syncedAt ?? undefined,
    license: data.license ?? undefined,
    ads: data.ads !== false,
    format: file.endsWith('.mdx') ? 'mdx' : 'md',
    updated: data.updated ? String(data.updated) : undefined,
    body: content,
  };
}

export function listContent(c: Collection): ContentEntry[] {
  if (!fs.existsSync(dir(c))) return [];
  return fs
    .readdirSync(dir(c))
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => read(c, f))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getContent(c: Collection, slug: string): ContentEntry | null {
  for (const ext of ['.md', '.mdx']) {
    const p = path.join(dir(c), slug + ext);
    if (fs.existsSync(p)) return read(c, slug + ext);
  }
  return null;
}

/** Drop the body so metadata can be serialized as props (undefined values removed). */
export function toMeta(entry: ContentEntry): ContentMeta {
  const { body: _body, ...meta } = entry;
  return JSON.parse(JSON.stringify(meta));
}

export interface Neighbor {
  href: string;
  label: string;
}

export function neighbors(
  list: ContentMeta[],
  slug: string,
  base: string,
  indexLabel: string,
): { prev: Neighbor | null; next: Neighbor | null } {
  const i = list.findIndex((d) => d.slug === slug);
  const at = (j: number): Neighbor | null =>
    list[j] ? { href: `${base}/${list[j].slug}`, label: list[j].title } : null;
  return { prev: i > 0 ? at(i - 1) : { href: base, label: indexLabel }, next: at(i + 1) };
}
