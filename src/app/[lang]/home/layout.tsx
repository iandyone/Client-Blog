import '@styles/global.scss';

import { IPageLayoutProps } from '@appTypes';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { getDictionary } from '@utils/dictionaries';

export default async function HomeLayout({ children, params }: IPageLayoutProps) {
  const { lang } = params;
  const { header, footer } = await getDictionary(lang, 'pageLayout');

  return (
    <>
      <Header data={header} />
      <main>{children}</main>
      <Footer data={footer} />
    </>
  );
}
