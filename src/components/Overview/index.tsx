import { AllPosts } from '@components/Overview/AllPosts';
import { FeaturedPost } from '@components/Overview/FeaturedPost';
import { posts } from '@constants/data';
import { FC } from 'react';

import styles from './overview.module.scss';
import { IOverviewProps } from './types';

const { wrapper, container } = styles;

export const Overview: FC<IOverviewProps> = ({ data }) => {
  const { allPosts, featuredPost } = data;
  return (
    <section className={wrapper} data-testid='overview-component'>
      <div className={container}>
        <FeaturedPost post={posts[0]} {...featuredPost} />
        <AllPosts posts={posts} {...allPosts} />
      </div>
    </section>
  );
};
