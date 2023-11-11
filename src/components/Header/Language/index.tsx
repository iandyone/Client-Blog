'use client';

import { useDispatchTyped } from '@hooks/redux';
import { toggleBuger } from '@reducers/app';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

import styles from './language.module.scss';
import { ILanguageProps } from './types';

export const Language: FC<ILanguageProps> = ({ lang }) => {
  const router = useRouter();
  const currentRoute = usePathname();
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    const language = lang === 'en' ? 'ru' : 'en';
    const route = `/${language}/${currentRoute.slice(4)}`;
    dispatch(toggleBuger(false));
    router.push(route);
  }

  return (
    <button className={styles.wrapper} onClick={handlerOnClick}>
      {lang}
    </button>
  );
};
