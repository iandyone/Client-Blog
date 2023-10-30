import { AboutUs } from '@components/AboutUs';
import { Authors } from '@components/Authors';
import { Categories } from '@components/Categories';
import { JoinUs } from '@components/JoinUs';
import { Labels } from '@components/Labels';
import { Overview } from '@components/Overview';
import StepByStep from '@components/StepByStep';
import { Testimonials } from '@components/Testimonials';
import { WhyWeStarted } from '@components/WhyWeStarted';
import { TAB_TITLE } from '@constants';
import { users } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

import { IHomePageProps } from './types';

const userList = users.slice(0, 4);

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Home`,
};

export default async function HomePage({ params: { lang } }: IHomePageProps) {
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
  } = await getDictionary(lang);

  return (
    <>
      <StepByStep data={stepByStep} />
      <Overview data={overview} />
      <AboutUs data={aboutUs} />
      <Categories data={categoriesHome} />
      <WhyWeStarted data={whyWeStarted} />
      <Authors data={authorsHome} users={userList} />
      <Labels data={labelsHome} />
      <Testimonials data={testimonials} />
      <JoinUs data={joinUs} />
    </>
  );
}
