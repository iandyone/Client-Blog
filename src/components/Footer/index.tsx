import { Links } from '@components/Links';
import { links } from '@constants/data';
import { Sen } from 'next/font/google';
import { FC } from 'react';

import styles from './footer.module.scss';
import { FooterNav } from './FooterNav';
import { Form } from './Form';
import { IFooterProps } from './types';

const sen = Sen({ subsets: ['latin'] });
const { footer, container, header, logo, content, title, copyright, contacts, contact } = styles;

export const Footer: FC<IFooterProps> = ({ data }) => {
  const { headerLogoText, bannerText, address, email, index, form } = data;
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={header}>
          <h3 className={logo}>{headerLogoText}</h3>
          <FooterNav />
        </div>
        <article className={content}>
          <h2 className={`${title} ${sen.className}`}>{bannerText}</h2>
          <Form {...form} />
        </article>
        <div className={copyright}>
          <div className={contacts}>
            <p className={contact}>{address}</p>
            <p className={contact}>
              {email} {index}
            </p>
          </div>
          <Links links={links} />
        </div>
      </div>
    </footer>
  );
};
