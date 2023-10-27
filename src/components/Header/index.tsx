'use client';

import '@styles/global.scss';

import { Pages } from '@appTypes/enums';
import { BurgerMenu } from '@components/Burger';
import { Navigation } from '@components/Navigation';
import { useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { FC, useMemo } from 'react';

import { data } from './data';
import styles from './header.module.scss';

const { header, container, logo, navigation, active } = styles;
const { headerLogoText, buttonText } = data;
const { HOME } = Pages;

export const Header: FC = () => {
  const isMobile = useMobile();
  const { burger } = useSelectorTyped((store) => store.app);
  const navigationClassName = useMemo(() => (burger ? `${navigation} ${active}` : navigation), [burger]);

  return (
    <header className={header}>
      <div className={container}>
        <span className={logo}>
          <Link href={HOME}>{headerLogoText}</Link>
        </span>
        <div className={navigationClassName}>
          <Navigation />
          <Button type='colored'>{buttonText}</Button>
        </div>
        {isMobile && <BurgerMenu />}
      </div>
    </header>
  );
};
