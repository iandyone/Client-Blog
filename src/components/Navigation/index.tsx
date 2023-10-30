'use client';

import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { toggleBuger } from '@reducers/app';
import { setPageScroll } from '@utils';
import Link from 'next/link';
import { FC, memo } from 'react';

import { routes } from './data';
import styles from './navigation.module.scss';
import { INavigationProps } from './types';

const { menu, link } = styles;

const NavigationComponent: FC<INavigationProps> = ({ type = 'full' }) => {
  const { burger } = useSelectorTyped((store) => store.app);
  const routesList = type === 'full' ? routes : routes.slice(0, 4);
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(toggleBuger(false));
    setPageScroll(burger);
  }

  return (
    <ul className={menu}>
      {routesList.map(({ title, href }) => (
        <span className={link} key={title} onClick={handlerOnClick}>
          <Link href={href}>{title}</Link>
        </span>
      ))}
    </ul>
  );
};

export const Navigation = memo(NavigationComponent);
