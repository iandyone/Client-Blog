'use client';

import { Category, SeatchType, Tags } from '@appTypes/enums';
import { digest } from '@constants/data';
import { Digest } from '@ui/Digest';
import { Title } from '@ui/Title';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Categories } from './Categories';
import styles from './feed.module.scss';
import { IFeedProps } from './types';

const { wrapper, container, digestClass } = styles;
const { CATEGORY, SEARCH, TAG } = SeatchType;

const FeedComponent: FC<IFeedProps> = ({ data, currentCategory }) => {
  const { noResults } = data;
  const [category, setCategory] = useState<Category>(currentCategory);
  const [tag, setTag] = useState<Tags>(null);
  const [searchType, setSearchType] = useState(CATEGORY);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const getDigest = useCallback(() => {
    if (searchType === CATEGORY)
      return digest.filter(({ label }) => label.toLowerCase() === category.toLowerCase());
    if (searchType === SEARCH) return digest.filter(({ tags }) => tags.includes(searchValue as Tags));
    if (searchType === TAG) return digest.filter(({ tags }) => tags.includes(tag));
  }, [category, searchType, searchValue, tag]);

  const [digestList, setDigestList] = useState(getDigest);
  const handlerOnChangeInput = useCallback((value: string) => setInputValue(value), []);
  const handlerOnSubmitSearch = useCallback(() => {
    setSearchType(SEARCH);
    setSearchValue(inputValue);
    setDigestList(getDigest());
  }, [getDigest, inputValue]);

  const handlerOnClickCategory = useCallback((category: Category) => {
    setCategory(category);
    setSearchType(CATEGORY);
  }, []);

  const handlerOnClickTag = useCallback((tag: Tags) => {
    setTag(tag);
    setSearchType(TAG);
  }, []);

  useEffect(() => {
    setDigestList(getDigest());
  }, [getDigest, category, searchType, tag]);

  return (
    <section className={wrapper} data-testid='feed-component'>
      <div className={container}>
        {digestList.length > 0 && <Digest containerClass={digestClass} digests={digestList} />}
        {digestList.length === 0 && <Title>{noResults}</Title>}
        <Categories
          data={data}
          inputValue={inputValue}
          inputOnChange={handlerOnChangeInput}
          onSubmit={handlerOnSubmitSearch}
          currentCategory={category}
          handlerCategory={handlerOnClickCategory}
          tagsHandler={handlerOnClickTag}
        />
      </div>
    </section>
  );
};

export const Feed = memo(FeedComponent);
