import { Links } from '@components/Links';
import { defaulUser, links } from '@constants/data';
import { Decor } from '@ui/Decor';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './author.module.scss';
import { IAuthorProps } from './types';

const { wrapper, container, contentClass, titleClass, aboutText, linksClass, decor } = styles;

const AuthorComponent: FC<IAuthorProps> = ({ data, author }) => {
  const { title, about } = data;
  const user = author ?? defaulUser;
  const { name, avatar } = user;

  const titleText = title.replace('{{name}}', name);

  return (
    <section className={wrapper} data-testid='author-component'>
      <div className={container}>
        <Image src={avatar} alt='author' priority />
        <div className={contentClass}>
          <Title className={titleClass} testID='author-title'>
            {titleText}
          </Title>
          <p className={aboutText}>{about}</p>
          <Links links={links} className={linksClass} />
          <Decor className={decor} />
        </div>
      </div>
    </section>
  );
};

export const Author = memo(AuthorComponent);
