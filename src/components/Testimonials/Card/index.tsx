import { ITestimonials } from '@appTypes';
import { Title, User } from '@ui';
import { FC, memo } from 'react';

import styles from './card.module.scss';

export const CardComponent: FC<ITestimonials> = (props) => {
  const { avatar, location, name, title } = props;

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <Title className={styles.titleClass}>{title}</Title>
        <User user={{ avatar, name, location }} />
      </div>
    </article>
  );
};

export const Card = memo(CardComponent);
