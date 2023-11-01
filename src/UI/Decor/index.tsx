import { FC, memo } from 'react';

import styles from './decor.module.scss';
import { IDecorProps } from './types';

const { wrapper, light, dark } = styles;

const DecorComponent: FC<IDecorProps> = ({ className }) => {
  return (
    <div className={`${className} ${wrapper}`}>
      <span className={light} />
      <span className={dark} />
    </div>
  );
};

export const Decor = memo(DecorComponent);
