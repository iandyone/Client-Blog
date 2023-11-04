'use client';

import '@styles/global.scss';

import { Routes } from '@appTypes/enums';
import { BurgerMenu } from '@components/Burger';
import { Navigation } from '@components/Navigation';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setLanguage } from '@reducers/app';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { FC, useEffect, useMemo } from 'react';

import styles from './header.module.scss';
import { IHeaderProps } from './types';

const { header, container, logo, navigationClass, active } = styles;
const { HOME } = Routes;

export const Header: FC<IHeaderProps> = ({ data, navigation, lang }) => {
  const { headerLogoText, buttonText } = data;
  const { burger } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const navigationClassName = useMemo(
    () => (burger ? `${navigationClass} ${active}` : navigationClass),
    [burger],
  );

  useEffect(() => {
    dispatch(setLanguage(lang));
  }, [dispatch, lang]);

  return (
    <header className={header}>
      <div className={container}>
        <span className={logo}>
          <Link href={`/${lang}/${HOME}`}>{headerLogoText}</Link>
        </span>
        <div className={navigationClassName}>
          <Navigation type='short' data={navigation} lang={lang} />
          <Button colored>{buttonText}</Button>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
