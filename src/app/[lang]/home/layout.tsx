import '@styles/global.scss';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { getDictionary } from '@utils/dictionaries';

import { IHomeLayourProps } from './types';

export default async function HomeLayout({ children, params }: IHomeLayourProps) {
  const { lang } = params;
  const { header, footer } = await getDictionary(lang);

  return (
    <>
      <Header data={header} />
      <main>{children}</main>
      <Footer data={footer} />
    </>
  );
}
