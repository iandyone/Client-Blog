import { ITestimonials } from '@appTypes';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './card.module.scss';

const { wrapper, container, titleClass, user, credentials, nameClass, locationClass } = styles;

export const CardComponent: FC<ITestimonials> = ({ avatar, location, name, title }) => {
  return (
    <article className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <div className={user}>
          <Image src={avatar} alt={name} />
          <div className={credentials}>
            <h4 className={nameClass}>{name}</h4>
            <p className={locationClass}>{location}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Card = memo(CardComponent);
