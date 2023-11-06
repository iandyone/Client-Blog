import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './banner.module.scss';
import { IBannerProps } from './types';

const { wrapper, container, titleClass, textClass, labelClass } = styles;

const BanneComponent: FC<IBannerProps> = ({ data }) => {
  const { text, title, label } = data;

  return (
    <section className={wrapper} data-testid='banner-component'>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <p className={textClass}>{text}</p>
        {label && <p className={labelClass}>{label}</p>}
      </div>
    </section>
  );
};

export const Banner = memo(BanneComponent);
