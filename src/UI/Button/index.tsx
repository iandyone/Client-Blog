import { Sen } from 'next/font/google';
import { FC } from 'react';

import styles from './button.module.scss';
import { IButtonProps } from './types';

const { button } = styles;
const sen = Sen({ subsets: ['latin'] });

export const Button: FC<IButtonProps> = ({ children }) => {
  const className = `${button} ${sen.className}`;
  return <button className={className}>{children}</button>;
};
