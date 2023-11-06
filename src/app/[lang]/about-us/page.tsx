import { IPageProps } from '@appTypes';
import { AboutUs } from '@components/AboutUs';
import { Authors } from '@components/Authors';
import { JoinUs } from '@components/JoinUs';
import { Team } from '@components/Team';
import { TAB_TITLE } from '@constants';
import { users } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | About Us`,
};

export default async function AboutPage({ params: { lang } }: IPageProps) {
  const { about, team, authors, joinUs } = await getDictionary(lang, 'about-us');

  return (
    <main data-testid='about-us-page'>
      <AboutUs data={about} />
      <Team data={team} />
      <Authors data={authors} users={users} lang={lang} />
      <JoinUs data={joinUs} />
    </main>
  );
}
