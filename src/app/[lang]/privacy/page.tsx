import { IPageProps } from '@appTypes';
import { Banner } from '@components/Banner';
import { Policy } from '@components/Policy';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Privacy`,
};

export default async function PrivacyPage({ params: { lang } }: IPageProps) {
  const { banner, policy } = await getDictionary(lang, 'privacy');

  return (
    <main data-testid='privacy-page'>
      <Banner data={banner} />
      <Policy data={policy} />
    </main>
  );
}
