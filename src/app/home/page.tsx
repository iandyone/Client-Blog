import { Overview } from '@components/Overview';
import StepByStep from '@components/StepByStep';
import { TAB_TITLE } from '@constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Home`,
};

export default function HomePage() {
  return (
    <>
      <StepByStep />
      <Overview />
    </>
  );
}
