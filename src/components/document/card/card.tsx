import Link from 'next/link';
import style from './card.module.css';

interface CardProps {
  href: string;
  title: string;
  description: string;
}

const Card = ({ href, title, description }: CardProps) => {
  return (
    <Link className={style.card} href={href}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default Card;
