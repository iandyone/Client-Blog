import { digest } from '@constants/data';
import { Digest } from '@ui/Digest';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './ap.module.scss';
import { IAuthorPostsProps } from './types';

const { wrapper, container, titleClass } = styles;

export const AuthorPostsComponent: FC<IAuthorPostsProps> = ({ data }) => {
  const { title } = data;
  const authorPosts = digest.slice(0, 2);

  return (
    <section className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <Digest digests={authorPosts} />
      </div>
    </section>
  );
};

export const AuthorPosts = memo(AuthorPostsComponent);
