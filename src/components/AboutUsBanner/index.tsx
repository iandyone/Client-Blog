import { Routes } from '@appTypes/enums';
import { Preview } from '@ui/Preview';
import { Sen } from 'next/font/google';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './aub.module.scss';
import { IAboutUsBannerProps } from './types';

const sen = Sen({ subsets: ['latin'] });
const { wrapper, container, about, mission, aboutTitleClass, link } = styles;

const AboutUsBannerComponent: FC<IAboutUsBannerProps> = ({ data }) => {
  const { aboutLabel, aboutTitle, aboutBody, missionLabel, missionTitle, missionBody, buttonText } = data;

  const classNames = {
    about: {
      titleClassName: aboutTitleClass,
    },
  };

  return (
    <section className={wrapper}>
      <div className={container}>
        <article className={about}>
          <Preview label={aboutLabel} title={aboutTitle} body={aboutBody} classNames={classNames.about} />
          <Link href={Routes.ABOUT} className={`${link} ${sen.className}`}>
            {buttonText}
          </Link>
        </article>
        <article className={mission}>
          <Preview label={missionLabel} title={missionTitle} body={missionBody} />
        </article>
      </div>
    </section>
  );
};

export const AboutUsBanner = memo(AboutUsBannerComponent);
