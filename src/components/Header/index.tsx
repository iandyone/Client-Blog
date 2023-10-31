'use client';

import '@styles/global.scss';

import { Routes } from '@appTypes/enums';
import { BurgerMenu } from '@components/Burger';
import { Navigation } from '@components/Navigation';
import { useSelectorTyped } from '@hooks/redux';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { FC, useMemo } from 'react';

import styles from './header.module.scss';
import { IHeaderProps } from './types';

const { header, container, logo, navigationClass, active } = styles;
const { HOME } = Routes;

export const Header: FC<IHeaderProps> = ({ data, navigation }) => {
  const { headerLogoText, buttonText } = data;
  const { burger } = useSelectorTyped((store) => store.app);
  const navigationClassName = useMemo(
    () => (burger ? `${navigationClass} ${active}` : navigationClass),
    [burger],
  );

  return (
    <header className={header}>
      <div className={container}>
        <span className={logo}>
          <Link href={HOME}>{headerLogoText}</Link>
        </span>
        <div className={navigationClassName}>
          <Navigation type='short' data={navigation} />
          <Button colored>{buttonText}</Button>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
