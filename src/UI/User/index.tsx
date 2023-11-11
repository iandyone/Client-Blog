import Image from 'next/image';
import { FC, memo } from 'react';

import { IUserProps } from './types';
import styles from './user.module.scss';

export const UserComponent: FC<IUserProps> = ({ user, iconClassName }) => {
  const { avatar, location, name } = user;
  return (
    <div className={styles.userClass}>
      <Image className={iconClassName} src={avatar} alt={name} />
      <div>
        <h4 className={styles.nameClass} data-testid='user-name'>
          {name}
        </h4>
        <p className={styles.locationClass}>{location}</p>
      </div>
    </div>
  );
};

export const User = memo(UserComponent);
