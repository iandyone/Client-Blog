import { Title } from '@ui/Title';
import { FC } from 'react';

import styles from './banner.module.scss';
import { IBannerProps } from './types';

const { wrapper, container, titleClass, textClass } = styles;

export const Banner: FC<IBannerProps> = ({ data }) => {
  const { text, title } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <p className={textClass}>{text}</p>
      </div>
    </section>
  );
};
