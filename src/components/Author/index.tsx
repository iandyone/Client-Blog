import { Links } from '@components/Links';
import { links } from '@constants/data';
import authorPreview from '@public/images/AuthorsPage/01.jpg';
import { Decor } from '@ui/Decor';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './author.module.scss';
import { IAuthorProps } from './types';

const { wrapper, container, contentClass, titleClass, aboutText, linksClass, decor } = styles;

const AuthorComponent: FC<IAuthorProps> = ({ data }) => {
  const { title, about } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <Image src={authorPreview} alt='author' priority />
        <div className={contentClass}>
          <Title className={titleClass}>{title}</Title>
          <p className={aboutText}>{about}</p>
          <Links links={links} className={linksClass} />
          <Decor className={decor} />
        </div>
      </div>
    </section>
  );
};

export const Author = memo(AuthorComponent);
