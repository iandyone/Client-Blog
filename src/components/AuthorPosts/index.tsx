import { Digest } from '@ui/Digest';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './ap.module.scss';
import { IAuthorPostsProps } from './types';

const { wrapper, container, titleClass } = styles;

export const AuthorPostsComponent: FC<IAuthorPostsProps> = ({ data, posts }) => {
  const { title } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <Digest digests={posts} />
      </div>
    </section>
  );
};

export const AuthorPosts = memo(AuthorPostsComponent);
