import { IPageProps } from '@appTypes';
import { AboutUs } from '@components/AboutUs';
import { Authors } from '@components/Authors';
import { JoinUs } from '@components/JoinUs';
import { TAB_TITLE } from '@constants';
import { users } from '@constants/data';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | About Us`,
};

export default async function AboutPage({ params: { lang } }: IPageProps) {
  const { about, authors, joinUs } = await getDictionary(lang, 'about-us');

  return (
    <>
      <AboutUs data={about} />
      <Authors users={users} data={authors} />
      <JoinUs data={joinUs} />
    </>
  );
}
