import { IPageProps } from '@appTypes';
import { Author } from '@components/Author';
import { AuthorPosts } from '@components/AuthorPosts';
import { TAB_TITLE } from '@constants';
import { digest } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Author`,
};

export default async function AuthorPage({ params: { lang } }: IPageProps) {
  const { author, posts } = await getDictionary(lang, 'author');
  const authorPosts = digest.slice(0, 2);

  return (
    <main data-testid='author-page'>
      <Author data={author} />
      <AuthorPosts data={posts} posts={authorPosts} />
    </main>
  );
}
