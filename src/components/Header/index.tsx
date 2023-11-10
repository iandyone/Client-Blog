'use client';

import '@styles/global.scss';

import { Routes } from '@appTypes/enums';
import { BurgerMenu } from '@components/Burger';
import { Navigation } from '@components/Navigation';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux';
import { setLanguage, setPopup } from '@reducers/app';
import { Button } from '@ui/Button';
import { setPageScroll } from '@utils';
import Link from 'next/link';
import { FC, useEffect, useMemo } from 'react';

import styles from './header.module.scss';
import { Modal } from './Modal';
import { IHeaderProps } from './types';

const { HOME } = Routes;

export const Header: FC<IHeaderProps> = ({ data, navigation, lang }) => {
  const { headerLogoText, buttonText } = data;
  const { burger, popup } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();
  const navigationClassName = useMemo(
    () => (burger ? `${styles.navigationClass} ${styles.active}` : styles.navigationClass),
    [burger],
  );

  function handlerOnClickButton() {
    dispatch(setPopup(true));
  }

  useEffect(() => {
    dispatch(setLanguage(lang));
  }, [dispatch, lang]);

  useEffect(() => {
    setPageScroll(!popup);
  }, [popup]);

  return (
    <header className={styles.header} data-testid='header'>
      <div className={styles.container}>
        <span className={styles.logo} data-testid='header-logo'>
          <Link href={`/${lang}/${HOME}`}>{headerLogoText}</Link>
        </span>
        <div className={navigationClassName}>
          <Navigation type='short' data={navigation} lang={lang} />
          <Button onClick={handlerOnClickButton} testID='header-media-button' colored>
            {buttonText}
          </Button>
        </div>
        <BurgerMenu />
      </div>
      {popup && <Modal />}
    </header>
  );
};
