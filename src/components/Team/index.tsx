import { imagePlaceholder } from '@constants/animations';
import image1 from '@public/images/aboutPage/01.jpg';
import image2 from '@public/images/aboutPage/02.jpg';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './team.module.scss';
import { ITeamProps } from './types';

const TeamComponent: FC<ITeamProps> = ({ data }) => {
  const { title1, title2, subtitle1, subtitle2, content1, content2 } = data;

  return (
    <section className={styles.wrapper} data-testid='team-component'>
      <div className={styles.container}>
        <article className={styles.body}>
          <div className={styles.content}>
            <Title className={styles.title}>{title1}</Title>
            <Title className={styles.subtitle}>{subtitle1}</Title>
            <p className={styles.subtitle}>{content1}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={image1}
              alt='content-image-1'
              placeholder={`data:image/${imagePlaceholder}`}
            />
          </div>
        </article>
        <article className={styles.body}>
          <div className={styles.content}>
            <Title className={styles.title}>{title2}</Title>
            <Title className={styles.subtitle}>{subtitle2}</Title>
            <p className={styles.subtitle}>{content2}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={image2}
              alt='content-image-2'
              placeholder={`data:image/${imagePlaceholder}`}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export const Team = memo(TeamComponent);
