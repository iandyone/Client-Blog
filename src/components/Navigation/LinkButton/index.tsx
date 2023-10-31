'use client';

import { useDispatchTyped } from '@hooks/redux';
import { toggleBuger } from '@reducers/app';
import { setPageScroll } from '@utils';
import Link from 'next/link';
import { FC } from 'react';

import styles from './linkButton.module.scss';
import { ILinkButtonProps } from './types';

const { link } = styles;

export const LinkButton: FC<ILinkButtonProps> = ({ href, title }) => {
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(toggleBuger(false));
    setPageScroll(true);
  }

  return (
    <li className={link} key={title} onClick={handlerOnClick}>
      <Link href={href}>{title}</Link>
    </li>
  );
};
