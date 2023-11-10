import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import styles from './policy.module.scss';
import { IPolicyProps } from './types';

const PolicyComponent: FC<IPolicyProps> = ({ data }) => {
  const { text, title, subtext, subtitle, subtext2 } = data;

  return (
    <section className={styles.wrapper} data-testid='privacy-component'>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title className={styles.titleClass}>{title}</Title>
          <p className={styles.textClass}>{text}</p>
        </div>
        <div className={styles.content}>
          <Title className={styles.subtitleClass}>{subtitle}</Title>
          <p className={styles.textClass}>{subtext}</p>
          <p className={styles.textClass}>{subtext2}</p>
        </div>
      </div>
    </section>
  );
};

export const Policy = memo(PolicyComponent);
