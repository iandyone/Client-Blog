import { Digest } from '@ui/Digest';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './ap.module.scss';
import { IAuthorPostsProps } from './types';

export const AuthorPostsComponent: FC<IAuthorPostsProps> = ({ data, posts }) => {
  const { title } = data;

  return (
    <section className={styles.wrapper} data-testid='author-posts-component'>
      <div className={styles.container}>
        <Title className={styles.titleClass}>{title}</Title>
        <Digest digests={posts} />
      </div>
    </section>
  );
};

export const AuthorPosts = memo(AuthorPostsComponent);
