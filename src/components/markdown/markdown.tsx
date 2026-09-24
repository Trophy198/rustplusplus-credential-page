import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './markdown.module.css';

/**
 * Serialize at build time. Synced upstream docs are plain markdown (`md`) so
 * raw HTML like <br> and prose containing braces render as-is; our own pages
 * are MDX and may use components.
 */
export async function renderMarkdown(body: string, format: 'md' | 'mdx') {
  return serialize(body, {
    mdxOptions: {
      format,
      remarkPlugins: [remarkGfm],
      rehypePlugins: format === 'md' ? [rehypeRaw, rehypeSlug] : [rehypeSlug],
    },
  });
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode };

const SmartLink = ({ href = '', children, ...rest }: LinkProps) => {
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

const components = { a: SmartLink };

const Markdown = ({ source }: { source: MDXRemoteSerializeResult }) => (
  <div className={styles.prose}>
    <MDXRemote {...source} components={components} />
  </div>
);

export default Markdown;
