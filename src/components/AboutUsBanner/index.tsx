import { IPreviewClasses } from '@appTypes';
import { Routes } from '@appTypes/enums';
import { Preview } from '@ui';
import { Sen } from 'next/font/google';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './aub.module.scss';
import { IAboutUsBannerProps } from './types';

const fontSen = Sen({ subsets: ['latin'] });

const AboutUsBannerComponent: FC<IAboutUsBannerProps> = ({ data }) => {
  const { aboutLabel, aboutTitle, aboutBody, missionLabel, missionTitle, missionBody, buttonText } = data;

  const classNames: IPreviewClasses = {
    titleClassName: styles.aboutTitleClass,
  };

  return (
    <section className={styles.wrapper} data-testid='about-us-banner-component'>
      <div className={styles.container}>
        <article className={styles.about}>
          <Preview label={aboutLabel} title={aboutTitle} body={aboutBody} classNames={classNames} />
          <Link
            href={Routes.ABOUT}
            className={`${styles.link} ${fontSen.className}`}
            data-testid='about-us-button'>
            {buttonText}
          </Link>
        </article>
        <article className={styles.mission}>
          <Preview label={missionLabel} title={missionTitle} body={missionBody} />
        </article>
      </div>
    </section>
  );
};

export const AboutUsBanner = memo(AboutUsBannerComponent);
