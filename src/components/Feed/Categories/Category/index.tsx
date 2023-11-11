import { Title } from '@ui';
import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './cic.module.scss';
import { ICategoryItemProps } from './types';

const CategoryItemComponent: FC<ICategoryItemProps> = (props) => {
  const { active, icon, id, title, onClick } = props;

  function handlerOnClick() {
    onClick(title);
  }

  return (
    <li
      className={`${styles.categoryItemClass} ${active && styles.activeClass}`}
      key={id}
      onClick={handlerOnClick}
      data-testid='categories-menu-option'>
      <div className={styles.imageCotainer}>
        <Image src={icon} alt={title} />
      </div>
      <Title className={styles.categoryItemTitleClass}>{title}</Title>
    </li>
  );
};

export const CategoryItem = memo(CategoryItemComponent);
