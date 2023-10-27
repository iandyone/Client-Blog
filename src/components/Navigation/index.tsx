import Link from 'next/link';
import { FC } from 'react';

import { routes } from './data';
import styles from './navigation.module.scss';

const { menu, link } = styles;

export const Navigation: FC = () => {
  return (
    <ul className={menu}>
      {routes.map(({ title, href }) => (
        <span className={link} key={title}>
          <Link href={href}>{title}</Link>
        </span>
      ))}
    </ul>
  );
};
