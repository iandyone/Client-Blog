import { Routes } from '@appTypes/enums';
import { Button } from '@ui';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './joinUs.module.scss';
import { IJoinUsData } from './types';

export const JoinUsComponent: FC<IJoinUsData> = ({ data }) => {
  const { body, buttonText, title } = data;

  return (
    <section className={styles.wrapper} data-testid='join-us-component'>
      <div className={styles.container}>
        <div className={styles.bodyClass}>
          <h3 className={styles.titleClass}>{title}</h3>
          <p className={styles.content}>{body}</p>
          <Link href={Routes.CONTACT}>
            <Button testID='join-us-button'>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const JoinUs = memo(JoinUsComponent);
