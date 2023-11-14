import { FC, memo } from 'react';

import styles from './decor.module.scss';
import { IDecorProps } from './types';

const DecorComponent: FC<IDecorProps> = ({ className }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <span className={styles.light} />
      <span className={styles.dark} />
    </div>
  );
};

export const Decor = memo(DecorComponent);
