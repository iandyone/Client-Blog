import { imagePlaceholder } from '@constants/animations';
import image1 from '@public/images/aboutPage/01.jpg';
import image2 from '@public/images/aboutPage/02.jpg';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './team.module.scss';
import { ITeamProps } from './types';

const { wrapper, container, body, content, title, subtitle, image, imageContainer } = styles;

const TeamComponent: FC<ITeamProps> = ({ data }) => {
  const { title1, title2, subtitle1, subtitle2, content1, content2 } = data;

  return (
    <section className={wrapper} data-testid='team-component'>
      <div className={container}>
        <article className={body}>
          <div className={content}>
            <Title className={title}>{title1}</Title>
            <Title className={subtitle}>{subtitle1}</Title>
            <p className={subtitle}>{content1}</p>
          </div>
          <div className={imageContainer}>
            <Image
              className={image}
              src={image1}
              alt='content-image-1'
              placeholder={`data:image/${imagePlaceholder}`}
            />
          </div>
        </article>
        <article className={body}>
          <div className={content}>
            <Title className={title}>{title2}</Title>
            <Title className={subtitle}>{subtitle2}</Title>
            <p className={subtitle}>{content2}</p>
          </div>
          <div className={imageContainer}>
            <Image
              className={image}
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
