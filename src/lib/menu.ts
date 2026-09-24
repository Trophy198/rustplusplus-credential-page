import type { ContentMeta } from '@/lib/content';
import type { MenuItem } from '@/types/sidebarTypes';

/** Sidebar for the reference docs, built from content frontmatter order. */
export function docsMenu(docs: ContentMeta[]): MenuItem[] {
  return [
    {
      id: 'docs',
      label: 'Documentation',
      href: '/docs',
      subItems: docs.map((d) => ({ id: d.slug, label: d.title, href: `/docs/${d.slug}` })),
    },
  ];
}

/** Sidebar for original guides. */
export function guidesMenu(guides: ContentMeta[]): MenuItem[] {
  return [
    {
      id: 'guides',
      label: 'Rust+ Guides',
      href: '/guides',
      subItems: guides.map((g) => ({ id: g.slug, label: g.title, href: `/guides/${g.slug}` })),
    },
  ];
}
