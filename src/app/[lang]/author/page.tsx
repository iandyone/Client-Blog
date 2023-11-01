import { IPageProps } from '@appTypes';
import { Author } from '@components/Author';
import { AuthorPosts } from '@components/AuthorPosts';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Author`,
};

export default async function AuthorPage({ params: { lang } }: IPageProps) {
  const { author, posts } = await getDictionary(lang, 'author');

  return (
    <>
      <Author data={author} />
      <AuthorPosts data={posts} />
    </>
  );
}
