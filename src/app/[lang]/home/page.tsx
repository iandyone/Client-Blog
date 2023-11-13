import { IPageProps } from '@appTypes';
import { AboutUsBanner } from '@components/AboutUsBanner';
import { Authors } from '@components/Authors';
import { Categories } from '@components/Categories';
import { Observer } from '@components/IntersectionObserver';
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

  const componentsData = [
    { component: StepByStepHome, props: { data: stepByStep } },
    { component: Overview, props: { data: overview } },
    { component: AboutUsBanner, props: { data: aboutUs } },
    { component: Categories, props: { data: categoriesHome, lang: lang } },
    { component: WhyWeStarted, props: { data: whyWeStarted } },
    { component: Authors, props: { data: authorsHome, users: userList, lang: lang } },
    { component: Labels, props: { data: labelsHome } },
    { component: Testimonials, props: { data: testimonials } },
    { component: JoinUs, props: { data: joinUs } },
  ];

  return (
    <main data-testid='home-page'>
      {componentsData.map(({ component: Component, props }, index) => (
        <Observer key={index}>
          <Component {...props} />
        </Observer>
      ))}
    </main>
  );
}
