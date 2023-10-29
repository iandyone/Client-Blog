import { AboutUs } from '@components/AboutUs';
import { Authors } from '@components/Authors';
import { Categories } from '@components/Categories';
import { JoinUs } from '@components/JoinUs';
import { Labels } from '@components/Labels';
import { Overview } from '@components/Overview';
import StepByStep from '@components/StepByStep';
import { WhyWeStarted } from '@components/WhyWeStarted';
import { TAB_TITLE } from '@constants';
import { users } from '@constants/data';
import { Metadata } from 'next';

import { data } from './data';

const { categoriesTitle } = data;
const userList = users.slice(0, 4);

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
      <Authors users={userList} />
      <Labels />
      <JoinUs />
    </>
  );
}
