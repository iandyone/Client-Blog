import { Sen } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { data, links } from './data';
import styles from './footer.module.scss';
import { FooterNav } from './FooterNav';
import { Form } from './Form';

const sen = Sen({ subsets: ['latin'] });
const { headerLogoText, bannerText, address, email, index } = data;
const { footer, container, header, logo, content, title, copyright, contacts, contact, media, social } =
  styles;

export const Footer: FC = () => {
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={header}>
          <h3 className={logo}>{headerLogoText}</h3>
          <FooterNav />
        </div>
        <article className={content}>
          <h2 className={`${title} ${sen.className}`}>{bannerText}</h2>
          <Form />
        </article>
        <div className={copyright}>
          <div className={contacts}>
            <p className={contact}>{address}</p>
            <p className={contact}>
              {email} {index}
            </p>
          </div>
          <ul className={media}>
            {links.map(({ icon, href, alt }) => (
              <Link className={social} href={href} key={alt}>
                <Image alt={alt} src={icon} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
