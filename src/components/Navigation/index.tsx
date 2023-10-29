import Link from 'next/link';
import { FC, memo } from 'react';

import { routes } from './data';
import styles from './navigation.module.scss';
import { INavigationProps } from './types';

const { menu, link } = styles;

const NavigationComponent: FC<INavigationProps> = ({ type = 'full' }) => {
  const routesList = type === 'full' ? routes : routes.slice(0, 4);

  return (
    <ul className={menu}>
      {routesList.map(({ title, href }) => (
        <span className={link} key={title}>
          <Link href={href}>{title}</Link>
        </span>
      ))}
    </ul>
  );
};

export const Navigation = memo(NavigationComponent);
