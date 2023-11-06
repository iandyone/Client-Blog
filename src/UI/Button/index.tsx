import { Sen } from 'next/font/google';
import { FC } from 'react';

import styles from './button.module.scss';
import { IButtonProps } from './types';

const { button, white } = styles;
const sen = Sen({ subsets: ['latin'] });

export const Button: FC<IButtonProps> = ({ children, className, colored, onClick }) => {
  const typeClass = colored ? white : '';
  const buttonClassName = `${button} ${sen.className} ${typeClass} ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};
