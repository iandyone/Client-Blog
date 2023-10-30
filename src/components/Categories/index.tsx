import { categories } from '@constants/data';
import { Title } from '@ui/Title';
import { FC, memo } from 'react';

import { Card } from './Card';
import styles from './categories.module.scss';
import { ICategoriesProps } from './types';

const { wrapper, container, header, list } = styles;

const CategoriesComponent: FC<ICategoriesProps> = ({ data }) => {
  const { title } = data;
  return (
    <section className={wrapper}>
      <div className={container}>
        <Title className={header}>{title}</Title>
        <ul className={list}>
          {categories.map((category) => (
            <Card {...category} key={category.title} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Categories = memo(CategoriesComponent);
