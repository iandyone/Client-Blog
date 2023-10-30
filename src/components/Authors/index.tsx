import { Title } from '@ui/Title';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './authors.module.scss';
import { IAuthorsProps } from './types';
import { User } from './User';

const { wrapper, container, titleClass, usersClass } = styles;

const AuthorsComponent: FC<IAuthorsProps> = ({ users, data }) => {
  const { title } = data;

  return (
    <section className={wrapper}>
      <div className={container}>
        <Title className={titleClass}>{title}</Title>
        <div className={usersClass}>
          {users.map((user) => (
            <Link href={user.profile} key={user.id}>
              <User {...user} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Authors = memo(AuthorsComponent);
