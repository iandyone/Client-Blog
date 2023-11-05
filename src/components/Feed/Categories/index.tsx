'use client';

import { Category } from '@appTypes/enums';
import businessIcon from '@public/images/homePage/business.svg';
import economyIcon from '@public/images/homePage/economy.svg';
import startupIcon from '@public/images/homePage/startup.svg';
import techIcon from '@public/images/homePage/technology.svg';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { FC, memo, useMemo } from 'react';

import styles from './categories.module.scss';
import { ICategoriesMenuProps } from './types';

const {
  wrapper,
  categories,
  categoriesTitleClass,
  categoriesListClass,
  categoryItemClass,
  imageCotainer,
  categoryItemTitleClass,
  activeClass,
} = styles;

const CategoriesComponent: FC<ICategoriesMenuProps> = ({ data, currentCategory, categoryHandler }) => {
  const { categoriesTitle } = data;
  const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY } = Category;
  const categoriesList = useMemo(() => {
    return [
      {
        id: 1,
        title: BUSINESS,
        icon: businessIcon,
        active: currentCategory.toLocaleLowerCase() === BUSINESS.toLocaleLowerCase(),
      },
      {
        id: 2,
        title: ECONOMY,
        icon: economyIcon,
        active: currentCategory.toLowerCase() === ECONOMY.toLowerCase(),
      },
      {
        id: 3,
        title: STARTUP,
        icon: startupIcon,
        active: currentCategory.toLowerCase() === STARTUP.toLowerCase(),
      },
      {
        id: 4,
        title: TECHNOLOGY,
        icon: techIcon,
        active: currentCategory.toLowerCase() === TECHNOLOGY.toLowerCase(),
      },
    ];
  }, [BUSINESS, ECONOMY, STARTUP, TECHNOLOGY, currentCategory]);

  return (
    <section className={wrapper}>
      <div className={categories}>
        <Title className={categoriesTitleClass}>{categoriesTitle}</Title>
        <ul className={categoriesListClass}>
          {categoriesList.map(({ icon, id, title, active }) => (
            <div
              className={`${categoryItemClass} ${active && activeClass}`}
              key={id}
              onClick={() => categoryHandler(title)}>
              <div className={imageCotainer}>
                <Image src={icon} alt={title} />
              </div>
              <Title className={categoryItemTitleClass}>{title}</Title>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Categories = memo(CategoriesComponent);
