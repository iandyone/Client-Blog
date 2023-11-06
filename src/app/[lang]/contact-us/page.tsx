import { IPageProps } from '@appTypes';
import { ContactUs } from '@components/ContactUs';
import { Map } from '@components/Map';
import { TAB_TITLE } from '@constants';
import { getDictionary } from '@utils/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${TAB_TITLE} | Contact US`,
};

export default async function ContactPage({ params: { lang } }: IPageProps) {
  const { contact } = await getDictionary(lang, 'contact-us');

  return (
    <main data-testid='contact-us-page'>
      <ContactUs data={contact} />
      <Map />
    </main>
  );
}
