import '@styles/global.scss';

import { IPageLayoutProps } from '@appTypes';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { getDictionary } from '@utils/dictionaries';

export default async function PageLayout({ children, params }: IPageLayoutProps) {
  const { lang } = params;
  const { header, footer, navigation } = await getDictionary(lang, 'layout');

  return (
    <>
      <Header data={header} navigation={navigation} />
      <main>{children}</main>
      <Footer data={footer} navigation={navigation} />
    </>
  );
}
