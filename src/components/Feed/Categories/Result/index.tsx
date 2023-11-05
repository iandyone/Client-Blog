import { FC, memo } from 'react';

import styles from './result.module.scss';
import { IResultProps } from './types';

const { wrapper } = styles;

const ResultComponent: FC<IResultProps> = ({ onClick, tag }) => {
  function handlerOnClick() {
    onClick(tag);
  }

  return (
    <li className={wrapper} onClick={handlerOnClick}>
      {tag}
    </li>
  );
};

export const Result = memo(ResultComponent);
