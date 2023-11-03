import { Sen } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './title.module.scss';
import { ITitleProps } from './types';

const { title } = styles;
const sen = Sen({ subsets: ['latin'] });

const TitleComponent: FC<ITitleProps> = ({ children, className }) => {
  const titleClassName = `${className} ${title} ${sen.className}`;

  return <h2 className={titleClassName}>{children}</h2>;
};

export const Title = memo(TitleComponent);
