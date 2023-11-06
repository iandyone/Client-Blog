import { Routes } from '@appTypes/enums';
import { FC, memo } from 'react';

import { LinkButton } from './LinkButton';
import styles from './navigation.module.scss';
import { INavigationProps } from './types';

const { menu } = styles;
const { HOME, ABOUT, BLOG, CONTACT, PRIVACY } = Routes;

const NavigationComponent: FC<INavigationProps> = ({ data, lang = 'en', type = 'full' }) => {
  const { home, blog, about, contact, privacy } = data;
  const routes = [
    { title: home, href: `/${lang}/${HOME}` },
    { title: blog, href: `/${lang}/${BLOG}` },
    { title: about, href: `/${lang}/${ABOUT}` },
    { title: contact, href: `/${lang}/${CONTACT}` },
    { title: privacy, href: `/${lang}/${PRIVACY}` },
  ];
  const routesList = type === 'full' ? routes : routes.slice(0, 4);

  return (
    <ul className={menu} data-testid='navigation'>
      {routesList.map(({ title, href }) => (
        <LinkButton href={href} title={title} key={title} />
      ))}
    </ul>
  );
};

export const Navigation = memo(NavigationComponent);
