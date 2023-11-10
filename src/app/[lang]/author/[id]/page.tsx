import { Author } from '@components/Author';
import { AuthorPosts } from '@components/AuthorPosts';
import { TAB_TITLE } from '@constants';
import { digest, users } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';
import { useMemo } from 'react';

import { IAuthorPageProps } from './types';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Author`,
};

export default async function AuthorPage({ params: { lang, id: userID } }: IAuthorPageProps) {
  const { author, posts } = await getDictionary(lang, 'author');
  const postsList = useMemo(() => digest.filter(({ author }) => author.id === Number(userID)), [userID]);
  const currentAuthor = useMemo(() => users.find(({ id }) => id === Number(userID)), [userID]);

  return (
    <main data-testid='author-page'>
      <Author data={author} author={currentAuthor} />
      <AuthorPosts data={posts} posts={postsList} />
    </main>
  );
}
