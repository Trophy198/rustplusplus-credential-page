import { JSXElementConstructor, ReactElement } from 'react';
import { StaticImageData } from 'next/image';

type ApplyCodeTagType = (string | ReactElement<any, string | JSXElementConstructor<any>>)[];

interface Paragraph {
  strong?: string;
  text: string | ApplyCodeTagType;
}

interface List {
  title?: Paragraph | undefined;
  data: string[] | ApplyCodeTagType[];
}

interface ImagesType {
  src: StaticImageData;
  alt: string;
}

export interface DiscordTextChannelsDataType {
  id: string;
  heading: string;
  blockquote?: string | ApplyCodeTagType;
  paragraphs?: Paragraph[];
  lists?: List[];
  images?: ImagesType[];
}
