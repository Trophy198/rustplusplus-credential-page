import Code from '@/components/document/code/code';
import Link from 'next/link';
import React from 'react';

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const applyCodeTag = (
  text: string,
  wordsToCode: string[],
  wordsToLink?: string[],
  wordToHref?: string[],
): React.ReactElement[] => {
  const escapedWordsToCode = wordsToCode.map(escapeRegExp);
  const escapedWordsToLink = wordsToLink ? wordsToLink.map(escapeRegExp) : [];
  const parts = text.split(new RegExp(`(${[...escapedWordsToCode, ...escapedWordsToLink].join('|')})`, 'g'));

  return parts.map((part, index) => {
    if (wordsToCode.includes(part)) {
      return <Code key={index}>{part}</Code>;
    } else if (wordsToLink && wordToHref) {
      const linkIndex = wordsToLink.indexOf(part);
      if (linkIndex !== -1) {
        return (
          <Link key={index} href={wordToHref[linkIndex]}>
            {part}
          </Link>
        );
      }
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export default applyCodeTag;
