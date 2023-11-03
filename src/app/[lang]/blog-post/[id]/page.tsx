import { BlogPost } from '@components/BlogPost';
import { JoinUs } from '@components/JoinUs';
import { ReadNext } from '@components/ReadNext';
import { TAB_TITLE } from '@constants';
import { digest } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

import { IBlogPostProps } from './types';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Blog Post`,
};

export default async function BlogPage({ params: { lang, id } }: IBlogPostProps) {
  const { joinUs, blog, readNext } = await getDictionary(lang, 'blog-post');
  const currentDigest = digest.find((post) => post.id === Number(id));

  return (
    <>
      <BlogPost data={blog} digest={currentDigest} />
      <ReadNext data={readNext} />
      <JoinUs data={joinUs} />
    </>
  );
}
