import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './cic.module.scss';
import { ICategoryItemProps } from './types';

const { categoryItemClass, activeClass, imageCotainer, categoryItemTitleClass } = styles;

const CategoryItemComponent: FC<ICategoryItemProps> = ({ active, icon, id, title, onClick }) => {
  function handlerOnClick() {
    onClick(title);
  }

  return (
    <li className={`${categoryItemClass} ${active && activeClass}`} key={id} onClick={handlerOnClick}>
      <div className={imageCotainer}>
        <Image src={icon} alt={title} />
      </div>
      <Title className={categoryItemTitleClass}>{title}</Title>
    </li>
  );
};

export const CategoryItem = memo(CategoryItemComponent);
