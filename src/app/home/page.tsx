import { AboutUs } from '@components/AboutUs';
import { Categories } from '@components/Categories';
import { Overview } from '@components/Overview';
import StepByStep from '@components/StepByStep';
import { WhyWeStarted } from '@components/WhyWeStarted';
import { TAB_TITLE } from '@constants';
import { Metadata } from 'next';

import { data } from './data';

const { categoriesTitle } = data;

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Home`,
};

export default function HomePage() {
  return (
    <>
      <StepByStep />
      <Overview />
      <AboutUs />
      <Categories title={categoriesTitle} />
      <WhyWeStarted />
    </>
  );
}
