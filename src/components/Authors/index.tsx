import { Title } from '@ui/Title';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './authors.module.scss';
import { data } from './data';
import { IAuthorsProps } from './types';
import { User } from './User';

const { title } = data;
const { wrapper, container, titleClass, usersClass } = styles;

const AuthorsComponent: FC<IAuthorsProps> = ({ users }) => {
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
