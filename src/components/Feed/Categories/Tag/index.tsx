import { Sen } from 'next/font/google';
import { FC, memo } from 'react';

import styles from './tag.module.scss';
import { ITagProps } from './types';

const sen = Sen({ subsets: ['latin'], weight: ['700'] });

const { tagClass } = styles;

const TagComponent: FC<ITagProps> = ({ onClick, tag }) => {
  function handlerOnClick() {
    onClick(tag);
  }

  return (
    <span className={` ${tagClass} ${sen.className}`} onClick={handlerOnClick}>
      {tag}
    </span>
  );
};

export const Tag = memo(TagComponent);
