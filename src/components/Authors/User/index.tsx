import { IUser } from '@appTypes';
import { Links } from '@components/Links';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './user.module.scss';

const UserComponent: FC<IUser> = (props) => {
  const { avatar, name, position, links } = props;

  return (
    <article className={styles.wrapper} data-testid='author-card'>
      <Image className={styles.avatarClass} alt={name} src={avatar} />
      <Title className={styles.titleClass} testID='author-card-name'>
        {name}
      </Title>
      <p className={styles.positionClass}>{position}</p>
      <Links links={links} className={styles.linksClass} />
    </article>
  );
};

export const User = memo(UserComponent);
