import { Title } from '@ui/Title';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './card.module.scss';
import { ICategoryCardProps } from './types';

const CardElement: FC<ICategoryCardProps> = (props) => {
  const { body, icon, title, href, lang, testID } = props;

  return (
    <Link href={`/${lang}/${href}`}>
      <article className={styles.wrapper} data-testid={testID}>
        <div className={styles.imageClass}>
          <Image src={icon} alt={title} />
        </div>
        <Title className={styles.titleClass}>{title}</Title>
        <p className={styles.text}>{body}</p>
      </article>
    </Link>
  );
};

export const Card = memo(CardElement);
