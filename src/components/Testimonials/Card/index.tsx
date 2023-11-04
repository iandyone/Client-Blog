import { ITestimonials } from '@appTypes';
import { Title } from '@ui/Title';
import { User } from '@ui/User';
import { FC, memo } from 'react';

import styles from './card.module.scss';

const { wrapper, container, titleClass } = styles;

export const CardComponent: FC<ITestimonials> = ({ avatar, location, name, title }) => {
  return (
    <article className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <User user={{ avatar, name, location }} />
      </div>
    </article>
  );
};

export const Card = memo(CardComponent);
