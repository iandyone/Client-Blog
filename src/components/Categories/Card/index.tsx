import { ICategory } from '@appTypes';
import { Title } from '@ui/Title';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './card.module.scss';

const { wrapper, imageClass, titleClass, text } = styles;

const CardElement: FC<ICategory> = ({ body, icon, title, href }) => {
  return (
    <Link href={href}>
      <article className={wrapper}>
        <div className={imageClass}>
          <Image src={icon} alt={title} />
        </div>
        <Title className={titleClass}>{title}</Title>
        <p className={text}>{body}</p>
      </article>
    </Link>
  );
};

export const Card = memo(CardElement);
