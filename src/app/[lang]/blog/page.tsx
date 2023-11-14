import { IPageProps } from '@appTypes';
import { Blog } from '@components/Blog';
import { Categories } from '@components/Categories';
import { JoinUs } from '@components/JoinUs';
import { StepByStepBlog } from '@components/StepByStepBlog';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Blog`,
};

export default async function BlogPage({ params: { lang } }: IPageProps) {
  const { stepByStep, categoriesHome, joinUs, blog } = await getDictionary(lang, 'blog');

  return (
    <main data-testid='blog-page'>
      <StepByStepBlog data={stepByStep} />
      <Blog data={blog} />
      <Categories data={categoriesHome} lang={lang} />
      <JoinUs data={joinUs} />
    </main>
  );
}
