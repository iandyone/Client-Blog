import { IPageProps } from '@appTypes';
import { AboutUsBanner } from '@components/AboutUsBanner';
import { Authors } from '@components/Authors';
import { Categories } from '@components/Categories';
import { JoinUs } from '@components/JoinUs';
import { Labels } from '@components/Labels';
import { Overview } from '@components/Overview';
import { StepByStepHome } from '@components/StepByStepHome';
import { Testimonials } from '@components/Testimonials';
import { WhyWeStarted } from '@components/WhyWeStarted';
import { TAB_TITLE } from '@constants';
import { users } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

const userList = users.slice(0, 4);

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Home`,
};

export default async function HomePage({ params: { lang } }: IPageProps) {
  const {
    stepByStep,
    overview,
    aboutUs,
    categoriesHome,
    whyWeStarted,
    authorsHome,
    labelsHome,
    testimonials,
    joinUs,
  } = await getDictionary(lang, 'home');

  return (
    <main data-testid='home-page'>
      <StepByStepHome data={stepByStep} />
      <Overview data={overview} />
      <AboutUsBanner data={aboutUs} />
      <Categories data={categoriesHome} lang={lang} />
      <WhyWeStarted data={whyWeStarted} />
      <Authors data={authorsHome} users={userList} lang={lang} />
      <Labels data={labelsHome} />
      <Testimonials data={testimonials} />
      <JoinUs data={joinUs} />
    </main>
  );
}
