import { Title } from '@ui/Title';
import { Inter } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './cu.module.scss';
import { Form } from './Form';
import { IContactUsPropds } from './types';

const inter = Inter({ subsets: ['latin', 'cyrillic'], weight: ['400', '900'] });
const {
  wrapper,
  container,
  header,
  labelClass,
  titleClass,
  subtitleClass,
  bannerClass,
  bannerContent,
  bannerTitle,
  bannerHeader,
  bannerText,
} = styles;

const ContactUsComponent: FC<IContactUsPropds> = ({ data }) => {
  const { label, subtitle, title, banner, form } = data;
  const { header1, header2, days, message, time, email, index } = banner;

  return (
    <section className={wrapper}>
      <div className={container}>
        <article className={header}>
          <h4 className={`${labelClass}  ${inter}`}>{label}</h4>
          <Title className={titleClass}>{title}</Title>
          <p className={`${subtitleClass} ${inter}`}>{subtitle}</p>
        </article>
        <article className={bannerClass}>
          <div className={bannerContent}>
            <h3 className={`${bannerHeader} ${inter}`}>{header1}</h3>
            <Title className={bannerTitle}>{days}</Title>
            <Title className={bannerTitle}>{time}</Title>
            <p className={bannerText}>{message}</p>
          </div>
          <div className={bannerContent}>
            <h3 className={`${bannerHeader} ${inter}`}>{header2}</h3>
            <Title className={bannerTitle}>{index}</Title>
            <p className={bannerText}>{email}</p>
          </div>
        </article>
        <Form {...form} />
      </div>
    </section>
  );
};

export const ContactUs = memo(ContactUsComponent);
