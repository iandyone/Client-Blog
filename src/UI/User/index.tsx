import { ITestimonials } from '@appTypes';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './user.module.scss';

const { user, nameClass, locationClass } = styles;

export const UserComponent: FC<ITestimonials> = ({ avatar, location, name }) => {
  return (
    <div className={user}>
      <Image src={avatar} alt={name} />
      <div>
        <h4 className={nameClass}>{name}</h4>
        <p className={locationClass}>{location}</p>
      </div>
    </div>
  );
};

export const User = memo(UserComponent);
