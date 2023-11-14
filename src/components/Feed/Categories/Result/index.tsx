import { FC, memo } from 'react';

import styles from './result.module.scss';
import { IResultProps } from './types';

const ResultComponent: FC<IResultProps> = ({ onClick, tag }) => {
  function handlerOnClick() {
    onClick(tag);
  }

  return (
    <li className={styles.wrapper} onClick={handlerOnClick}>
      {tag}
    </li>
  );
};

export const Result = memo(ResultComponent);
