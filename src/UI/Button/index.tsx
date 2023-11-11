import { Sen } from 'next/font/google';
import { FC } from 'react';

import styles from './button.module.scss';
import { IButtonProps } from './types';

const fontSen = Sen({ subsets: ['latin'] });

export const Button: FC<IButtonProps> = (props) => {
  const { children, className, colored, onClick, testID } = props;
  const typeClass = colored ? styles.white : '';
  const buttonClassName = `${styles.button} ${fontSen.className} ${typeClass} ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick} data-testid={testID}>
      {children}
    </button>
  );
};
