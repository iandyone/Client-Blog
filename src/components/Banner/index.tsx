import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './banner.module.scss';
import { IBannerProps } from './types';

const BanneComponent: FC<IBannerProps> = ({ data }) => {
  const { text, title, label } = data;

  return (
    <section className={styles.wrapper} data-testid='banner-component'>
      <div className={styles.container}>
        <Title className={styles.titleClass} testID='banner-title'>
          {title}
        </Title>
        <p className={styles.textClass}>{text}</p>
        {label && (
          <p className={styles.labelClass} data-testid='banner-label'>
            {label}
          </p>
        )}
      </div>
    </section>
  );
};

export const Banner = memo(BanneComponent);
