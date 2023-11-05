'use client';

import { Category } from '@appTypes/enums';
import { digest } from '@constants/data';
import { Digest } from '@ui/Digest';
import { FC, memo, useCallback, useMemo, useState } from 'react';

import { Categories } from './Categories';
import styles from './feed.module.scss';
import { IFeedProps } from './types';

const { wrapper, container, digestClass } = styles;

const FeedComponent: FC<IFeedProps> = ({ data, currentCategory }) => {
  const [category, setCategory] = useState<Category>(currentCategory);
  const digestList = useMemo(
    () => digest.filter(({ label }) => label.toLowerCase() === currentCategory.toLowerCase()),
    [currentCategory],
  );

  const handlerOnClickCategory = useCallback((category: Category) => setCategory(category), []);

  return (
    <section className={wrapper}>
      <div className={container}>
        <Digest containerClass={digestClass} digests={digestList} />
        <Categories data={data} currentCategory={category} categoryHandler={handlerOnClickCategory} />
      </div>
    </section>
  );
};

export const Feed = memo(FeedComponent);
