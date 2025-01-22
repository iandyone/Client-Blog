import { Digest } from '@components/Digest';
import { digest } from '@constants/data';
import { Title } from '@ui';
import { FC, memo } from 'react';

import styles from './blog.module.scss';
import { IBlogProps } from './types';

const BlogComponent: FC<IBlogProps> = ({ data }) => {
  const { title, next, prev } = data;

  return (
    <section className={styles.wrapper} data-testid='blog-component'>
      <div className={styles.container}>
        <Title className={styles.titleClass}>{title}</Title>
        <Digest digests={digest} controls={true} data={{ next, prev }} />
      </div>
    </section>
  );
};

export const Blog = memo(BlogComponent);
