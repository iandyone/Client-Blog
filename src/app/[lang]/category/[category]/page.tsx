import { Banner } from '@components/Banner';
import { Feed } from '@components/Feed';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

import { ICategoryBanner, ICategoryPageProps } from './types';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Blog Post`,
};

export default async function CategoryPage({ params: { lang, category } }: ICategoryPageProps) {
  const { banner, feed } = await getDictionary(lang, 'category');
  const bannerData = getBannerData();

  function getBannerData() {
    const content: ICategoryBanner = banner;
    const { title, text, label } = content;

    const titleText = title.replace('{{category}}', category);
    const labelText = label.replace('{{category}}', category);

    return {
      title: titleText,
      text: text,
      label: labelText,
    };
  }

  return (
    <>
      <Banner data={bannerData} />
      <Feed data={feed} currentCategory={category} />
    </>
  );
}
