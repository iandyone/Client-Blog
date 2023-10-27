import { Sen } from 'next/font/google';
import { FC } from 'react';

import styles from './button.module.scss';
import { IButtonProps } from './types';

const { button, colored } = styles;
const sen = Sen({ subsets: ['latin'] });

export const Button: FC<IButtonProps> = ({ children, type = 'default' }) => {
  const typeClass = type === 'default' ? '' : colored;
  const className = `${button} ${sen.className} ${typeClass}`;

  return <button className={className}>{children}</button>;
};
