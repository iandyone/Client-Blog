import { AllPosts } from '@components/Overview/AllPosts';
import { FeaturedPost } from '@components/Overview/FeaturedPost';
import { posts } from '@constants/posts';
import { FC } from 'react';

import styles from './overview.module.scss';

const { wrapper, container } = styles;

export const Overview: FC = () => {
  return (
    <section className={wrapper}>
      <div className={container}>
        <FeaturedPost post={posts[0]} />
        <AllPosts posts={posts} />
      </div>
    </section>
  );
};
