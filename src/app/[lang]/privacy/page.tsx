import { IPageProps } from '@appTypes';
import { Banner } from '@components/Banner';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Privacy`,
};

export default async function PrivacyPage({ params: { lang } }: IPageProps) {
  const { banner } = await getDictionary(lang, 'privacy');

  return (
    <>
      <Banner data={banner} />
    </>
  );
}
