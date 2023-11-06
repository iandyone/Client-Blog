import { categories } from '@constants/data';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import { Card } from './Card';
import styles from './categories.module.scss';
import { ICategoriesProps } from './types';

const { wrapper, container, header, list } = styles;

const CategoriesComponent: FC<ICategoriesProps> = ({ data, lang }) => {
  const { title } = data;
  return (
    <section className={wrapper} data-testid='categories-component'>
      <div className={container}>
        <Title className={header}>{title}</Title>
        <ul className={list}>
          {categories.map((category) => (
            <Card
              {...category}
              lang={lang}
              key={category.title}
              testID={`${category.title.toLowerCase()}-category-card`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Categories = memo(CategoriesComponent);
