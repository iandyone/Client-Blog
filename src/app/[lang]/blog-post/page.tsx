import { IPageProps } from '@appTypes';
import { BlogPost } from '@components/BlogPost';
import { JoinUs } from '@components/JoinUs';
import { ReadNext } from '@components/ReadNext';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Blog`,
};

export default async function BlogPage({ params: { lang } }: IPageProps) {
  const { joinUs, blog, readNext } = await getDictionary(lang, 'blog-post');

  return (
    <>
      <BlogPost data={blog} />
      <ReadNext data={readNext} />
      <JoinUs data={joinUs} />
    </>
  );
}
