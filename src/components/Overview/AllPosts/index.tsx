import { Pages } from '@appTypes/enums';
import { Post } from '@ui/Post';
import { Title } from '@ui/Title';
import Link from 'next/link';
import { FC, memo, useMemo } from 'react';

import styles from './allPosts.module.scss';
import { data } from './data';
import { IAllPostsProps } from './types';

const { titleText, lintText } = data;
const { wrapper, header, link, list, postItem } = styles;

const AllPostsCompoennt: FC<IAllPostsProps> = ({ posts }) => {
  const postList = useMemo(() => posts.slice(0, 4), [posts]);

  return (
    <article className={wrapper}>
      <div className={header}>
        <Title>{titleText}</Title>
        <Link href={Pages.BLOG} className={link}>
          {lintText}
        </Link>
      </div>
      <ul className={list}>
        {postList.map((post) => (
          <li key={post.id} className={postItem}>
            <Post post={post} media={false} body={false} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export const AllPosts = memo(AllPostsCompoennt);
