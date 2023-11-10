import { Routes } from '@appTypes/enums';
import { Post, Title } from '@ui';
import Link from 'next/link';
import { FC, memo, useMemo } from 'react';

import styles from './allPosts.module.scss';
import { IAllPostsProps } from './types';

const AllPostsCompoennt: FC<IAllPostsProps> = ({ posts, lintText, titleText }) => {
  const postList = useMemo(() => posts.slice(0, 4), [posts]);

  return (
    <article className={styles.wrapper}>
      <div className={styles.header}>
        <Title>{titleText}</Title>
        <Link href={Routes.BLOG} className={styles.link} data-testid='all-posts-button'>
          {lintText}
        </Link>
      </div>
      <ul className={styles.list}>
        {postList.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Post post={post} media={false} body={false} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export const AllPosts = memo(AllPostsCompoennt);
