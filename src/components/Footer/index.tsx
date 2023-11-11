import { Links } from '@components/Links';
import { links } from '@constants/data';
import { Sen } from 'next/font/google';
import { FC } from 'react';

import styles from './footer.module.scss';
import { FooterNav } from './FooterNav';
import { Form } from './Form';
import { IFooterProps } from './types';

const fontSen = Sen({ subsets: ['latin'] });

export const Footer: FC<IFooterProps> = ({ data, navigation, lang }) => {
  const { headerLogoText, bannerText, address, email, index, form } = data;
  return (
    <footer className={styles.footer} data-testid='footer'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.logo} data-testid='footer-logo'>
            {headerLogoText}
          </h3>
          <FooterNav navigation={navigation} lang={lang} />
        </div>
        <article className={styles.content}>
          <h2 className={`${styles.title} ${fontSen.className}`}>{bannerText}</h2>
          <Form {...form} />
        </article>
        <div className={styles.copyright}>
          <div className={styles.contacts}>
            <p className={styles.contact}>{address}</p>
            <p className={styles.contact}>
              {email} {index}
            </p>
          </div>
          <Links links={links} />
        </div>
      </div>
    </footer>
  );
};
