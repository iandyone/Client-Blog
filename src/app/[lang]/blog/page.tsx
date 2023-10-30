import { IPageProps } from '@appTypes';
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
  const { stepByStep, categoriesHome, joinUs } = await getDictionary(lang, 'blog');

  return (
    <>
      <StepByStepBlog data={stepByStep} />
      <Categories data={categoriesHome} />
      <JoinUs data={joinUs} />
    </>
  );
}
