'use client';

import '@styles/global.scss';

import { Pages } from '@appTypes/enums';
import { BurgerMenu } from '@components/Burger';
import { useSelectorTyped } from '@hooks/redux';
import { useMobile } from '@hooks/window';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { FC, useMemo } from 'react';

import { data, routes } from './data';
import styles from './header.module.scss';

const { header, container, logo, navigation, menu, link, active } = styles;
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
        <nav className={navigationClassName}>
          <ul className={menu}>
            {routes.map(({ title, href }) => (
              <span className={link} key={title}>
                <Link href={href}>{title}</Link>
              </span>
            ))}
          </ul>
          <Button>{buttonText}</Button>
        </nav>
        {isMobile && <BurgerMenu />}
      </div>
    </header>
  );
};
