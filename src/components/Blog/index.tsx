import { digest } from '@constants/data';
import { Digest } from '@ui/Digest';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './blog.module.scss';
import { IBlogProps } from './types';

const { wrapper, container, titleClass } = styles;

const BlogComponent: FC<IBlogProps> = ({ data }) => {
  const { title } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <Digest digests={digest} />
      </div>
    </section>
  );
};

export const Blog = memo(BlogComponent);
