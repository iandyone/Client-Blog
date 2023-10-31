import { Routes } from '@appTypes/enums';
import { FC, memo } from 'react';

import { LinkButton } from './LinkButton';
import styles from './navigation.module.scss';
import { INavigationProps } from './types';

const { menu } = styles;
const { HOME, ABOUT, BLOG, CONTACT, PRIVACY } = Routes;

const NavigationComponent: FC<INavigationProps> = ({ data, type = 'full' }) => {
  const { home, blog, about, contact, privacy } = data;
  const routes = [
    { title: home, href: HOME },
    { title: blog, href: BLOG },
    { title: about, href: ABOUT },
    { title: contact, href: CONTACT },
    { title: privacy, href: PRIVACY },
  ];
  const routesList = type === 'full' ? routes : routes.slice(0, 4);

  return (
    <ul className={menu}>
      {routesList.map(({ title, href }) => (
        <LinkButton href={href} title={title} key={title} />
      ))}
    </ul>
  );
};

export const Navigation = memo(NavigationComponent);
