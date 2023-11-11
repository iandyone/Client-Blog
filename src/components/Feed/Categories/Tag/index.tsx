import { Sen } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './tag.module.scss';
import { ITagProps } from './types';

const fontSen = Sen({ subsets: ['latin'], weight: ['700'] });

const TagComponent: FC<ITagProps> = ({ onClick, tag }) => {
  function handlerOnClick() {
    onClick(tag);
  }

  return (
    <span className={` ${styles.tagClass} ${fontSen.className}`} onClick={handlerOnClick}>
      {tag}
    </span>
  );
};

export const Tag = memo(TagComponent);
