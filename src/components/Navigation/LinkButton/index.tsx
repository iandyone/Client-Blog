'use client';

import { useDispatchTyped } from '@hooks/redux';
import { toggleBuger } from '@reducers/app';
import { setPageScroll } from '@utils';
import Link from 'next/link';
import { FC } from 'react';

import styles from './linkButton.module.scss';
import { ILinkButtonProps } from './types';

export const LinkButton: FC<ILinkButtonProps> = ({ href, title }) => {
  const testID = `route-${title.split(' ').join('-').toLowerCase()}`;
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(toggleBuger(false));
    setPageScroll(true);
  }

  return (
    <li className={styles.link} key={title} onClick={handlerOnClick} data-testid={testID}>
      <Link href={href}>{title}</Link>
    </li>
  );
};
