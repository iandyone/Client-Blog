import { IUser } from '@appTypes';
import { Links } from '@components/Links';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './user.module.scss';

const { wrapper, avatarClass, titleClass, positionClass, linksClass } = styles;

const UserComponent: FC<IUser> = ({ avatar, name, position, links }) => {
  return (
    <article className={wrapper} data-testid='author-card'>
      <Image className={avatarClass} alt={name} src={avatar} />
      <Title className={titleClass}>{name}</Title>
      <p className={positionClass}>{position}</p>
      <Links links={links} className={linksClass} />
    </article>
  );
};

export const User = memo(UserComponent);
