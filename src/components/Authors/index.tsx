import { Title } from '@ui/Title';
import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './authors.module.scss';
import { IAuthorsProps } from './types';
import { User } from './User';

const AuthorsComponent: FC<IAuthorsProps> = ({ users, data, lang }) => {
  const { title } = data;

  return (
    <section className={styles.wrapper} data-testid='authors-component'>
      <div className={styles.container}>
        <Title className={styles.titleClass}>{title}</Title>
        <div className={styles.usersClass}>
          {users.map((user) => {
            const { profile, id } = user;
            const link = `/${lang}/${profile}/${id}`;
            return (
              <Link href={link} key={id}>
                <User {...user} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Authors = memo(AuthorsComponent);
