import { imagePlaceholder } from '@constants/animations';
import Image from 'next/image';
import { FC, memo } from 'react';

import { IUserProps } from './types';
import styles from './user.module.scss';

const { userClass, nameClass, locationClass } = styles;

export const UserComponent: FC<IUserProps> = ({ user, iconClassName }) => {
  const { avatar, location, name } = user;
  return (
    <div className={userClass}>
      <Image
        className={iconClassName}
        src={avatar}
        alt={name}
        placeholder={`data:image/${imagePlaceholder}`}
      />
      <div>
        <h4 className={nameClass} data-testid='user-name'>
          {name}
        </h4>
        <p className={locationClass}>{location}</p>
      </div>
    </div>
  );
};

export const User = memo(UserComponent);
