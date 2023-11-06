'use client';

import { ICategoryItem } from '@appTypes';
import { Category, Tags } from '@appTypes/enums';
import businessIcon from '@public/images/homePage/business.svg';
import economyIcon from '@public/images/homePage/economy.svg';
import startupIcon from '@public/images/homePage/startup.svg';
import techIcon from '@public/images/homePage/technology.svg';
import { Button } from '@ui/Button';
import { Title } from '@ui/Title';
import { Sen } from 'next/font/google';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';

import styles from './categories.module.scss';
import { CategoryItem } from './Category';
import { Result } from './Result';
import { Tag } from './Tag';
import { ICategoriesMenuProps } from './types';

const sen = Sen({ subsets: ['latin'], weight: ['700'] });

const {
  wrapper,
  categories,
  categoriesTitleClass,
  categoriesListClass,
  formClass,
  inputClass,
  resultsClass,
  buttonClass,
  tagsContainer,
  tagsTitleClass,
  tagsListClass,
} = styles;

const CategoriesComponent: FC<ICategoriesMenuProps> = ({
  data,
  currentCategory,
  handlerCategory,
  tagsHandler,
  inputValue,
  inputOnChange,
  onSubmit,
}) => {
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { categoriesTitle, buttonText, placeholder, tagsTitle } = data;
  const { BUSINESS, ECONOMY, STARTUP, TECHNOLOGY } = Category;
  const categoriesList: ICategoryItem[] = useMemo(() => {
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
    <section className={wrapper}>
      <form className={formClass} onSubmit={handlerOnSubmit}>
        <input
          className={`${inputClass} ${sen.className}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handlerOnChangeInput}
          type='text'
          data-testid='categories-input'
        />
        {showResults &&
          searchResult.length > 0 &&
          searchResult.map((result) => (
            <ul className={resultsClass} key={result}>
              <Result tag={result} onClick={handlerOnClickResult} />
            </ul>
          ))}
        <Button className={buttonClass} testID='categories-submit-button'>
          {buttonText}
        </Button>
      </form>
      <div className={categories} data-testid='categories-menu'>
        <Title className={categoriesTitleClass}>{categoriesTitle}</Title>
        <ul className={categoriesListClass}>
          {categoriesList.map((category) => (
            <CategoryItem {...category} onClick={handlerCategory} key={category.id} />
          ))}
        </ul>
      </div>
      <div className={tagsContainer}>
        <Title className={tagsTitleClass}>{tagsTitle}</Title>
        <ul className={tagsListClass}>
          {Object.values(Tags).map((tag) => (
            <Tag tag={tag} key={tag} onClick={tagsHandler} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Categories = memo(CategoriesComponent);
