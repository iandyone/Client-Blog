import { Links } from '@components/Links';
import { imagePlaceholder } from '@constants/animations';
import { defaulUser, links } from '@constants/data';
import { Decor, Title } from '@ui';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './author.module.scss';
import { IAuthorProps } from './types';

const AuthorComponent: FC<IAuthorProps> = ({ data, author }) => {
  const { title, about } = data;
  const user = author ?? defaulUser;
  const { name, avatar } = user;

  const titleText = title.replace('{{name}}', name);

  return (
    <section className={styles.wrapper} data-testid='author-component'>
      <div className={styles.container}>
        <Image src={avatar} alt='author' placeholder={`data:image/${imagePlaceholder}`} priority />
        <div className={styles.contentClass}>
          <Title className={styles.titleClass} testID='author-title'>
            {titleText}
          </Title>
          <p className={styles.aboutText}>{about}</p>
          <Links links={links} className={styles.linksClass} />
          <Decor className={styles.decor} />
        </div>
      </div>
    </section>
  );
};

export const Author = memo(AuthorComponent);
