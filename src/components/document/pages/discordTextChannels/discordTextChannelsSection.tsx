import Heading2 from '@/components/document/heading2/heading2';
import Blockquote from '@/components/blockquote/blockquote';
import ListItem from '@/components/document/listItem/listItem';
import Strong from '@/components/document/strong/strong';
import Image from 'next/image';
import { Link } from 'react-scroll';
import Paragraph from '@/components/document/paragraph/paragraph';
import UnorderedList from '@/components/document/unorderedList/unorderedList';
import styles from '@/components/document/pages/common.module.css';
import { DiscordTextChannelsDataType } from '@/types/discordTextChannelsDataTypes';

const DiscordTextChannelsSection = ({
  id,
  heading,
  blockquote,
  paragraphs,
  lists,
  images,
}: DiscordTextChannelsDataType) => (
  <>
    <Heading2 id={id}>{heading}</Heading2>
    {blockquote && <Blockquote>{blockquote}</Blockquote>}
    {paragraphs?.map((paragraph, index) => (
      <Paragraph key={index}>
        {paragraph.strong && <Strong>{paragraph.strong}</Strong>} {paragraph.text}
      </Paragraph>
    ))}
    {id === 'Discord-Text-Channels'
      ? lists?.map((list, listIndex) => (
          <nav key={listIndex}>
            <UnorderedList
              items={list.data.map((item, itemIndex) => (
                <ListItem key={itemIndex}>
                  <Link to={`${item}`} smooth={true} duration={1000} offset={-105}>
                    {item}
                  </Link>
                </ListItem>
              ))}
            />
          </nav>
        ))
      : lists?.map((list, listIndex) => (
          <div key={listIndex}>
            <Paragraph>
              {list?.title && <Strong>{list?.title.strong}</Strong>} {list?.title && list?.title.text}
            </Paragraph>
            <UnorderedList
              items={list.data.map((item, itemIndex) => (
                <ListItem key={itemIndex}>{item}</ListItem>
              ))}
            />
          </div>
        ))}
    {images?.map((image, index) => (
      <Image key={index} src={image.src} alt={image.alt} placeholder="blur" />
    ))}
  </>
);

export default DiscordTextChannelsSection;
