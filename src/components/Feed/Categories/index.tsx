'use client';

import { Tags } from '@appTypes/enums';
import { Button, Title } from '@ui';
import { Sen } from 'next/font/google';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useState } from 'react';

import styles from './categories.module.scss';
import { CategoryItem } from './Category';
import { categoriesList } from './data';
import { Result } from './Result';
import { Tag } from './Tag';
import { ICategoriesMenuProps } from './types';

const fontSen = Sen({ subsets: ['latin'], weight: ['700'] });

const CategoriesComponent: FC<ICategoriesMenuProps> = (props) => {
  const { data, currentCategory, handlerCategory, tagsHandler, inputValue, inputOnChange, onSubmit } = props;

  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { categoriesTitle, buttonText, placeholder, tagsTitle } = data;

  function handlerOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit();
  }

  const handlerOnChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      inputOnChange(e.target.value);
      setShowResults(true);
    },
    [inputOnChange],
  );

  const handlerOnClickResult = useCallback(
    (result: string) => {
      inputOnChange(result);
      setShowResults(false);
    },
    [inputOnChange],
  );

  useEffect(() => {
    if (inputValue.length > 0) {
      const results = Object.values(Tags).filter((tag) => tag.includes(inputValue));
      setSearchResult(results);
    } else {
      setSearchResult([]);
      setShowResults(false);
    }
  }, [inputValue]);

  return (
    <section className={styles.wrapper}>
      <form className={styles.formClass} onSubmit={handlerOnSubmit}>
        <input
          className={`${styles.inputClass} ${fontSen.className}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handlerOnChangeInput}
          type='text'
          data-testid='categories-input'
        />
        {showResults &&
          searchResult.length > 0 &&
          searchResult.map((result) => (
            <ul className={styles.resultsClass} key={result}>
              <Result tag={result} onClick={handlerOnClickResult} />
            </ul>
          ))}
        <Button className={styles.buttonClass} testID='categories-submit-button'>
          {buttonText}
        </Button>
      </form>
      <div className={styles.categories} data-testid='categories-menu'>
        <Title className={styles.categoriesTitleClass}>{categoriesTitle}</Title>
        <ul className={styles.categoriesListClass}>
          {categoriesList.map((category) => (
            <CategoryItem
              {...category}
              active={currentCategory.toLocaleLowerCase() === category.title.toLocaleLowerCase()}
              onClick={handlerCategory}
              key={category.id}
            />
          ))}
        </ul>
      </div>
      <div className={styles.tagsContainer}>
        <Title className={styles.tagsTitleClass}>{tagsTitle}</Title>
        <ul className={styles.tagsListClass}>
          {Object.values(Tags).map((tag) => (
            <Tag tag={tag} key={tag} onClick={tagsHandler} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Categories = memo(CategoriesComponent);
