import { IPageProps } from '@appTypes';
import { BlogPost } from '@components/BlogPost';
import { JoinUs } from '@components/JoinUs';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Blog Post`,
};

export default async function BlogPage({ params: { lang } }: IPageProps) {
  const { joinUs, blog } = await getDictionary(lang, 'post');

  return (
    <main data-testid='default-post-page'>
      <BlogPost data={blog} />
      <JoinUs data={joinUs} />
    </main>
  );
}
