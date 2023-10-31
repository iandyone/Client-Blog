import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './banner.module.scss';
import { IBannerProps } from './types';

const { wrapper, container, titleClass, textClass } = styles;

const BanneComponent: FC<IBannerProps> = ({ data }) => {
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

export const Banner = memo(BanneComponent);
