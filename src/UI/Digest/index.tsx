'use client';

import { Routes } from '@appTypes/enums';
import { MainContent } from '@components/MainContent';
import { digest } from '@constants/data';
import { useSelectorTyped } from '@hooks/redux';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo, useCallback, useLayoutEffect, useMemo, useState } from 'react';

import styles from './digest.module.scss';
import { IDigestProps } from './types';

const {
  wrapper,
  digestClass,
  container,
  titleClass,
  content,
  image,
  imageContainer,
  labelClass,
  controlsClass,
  buttonClass,
  disabled,
  columnClass,
} = styles;
const POSTS_PER_PAGE = 5;

const DigestConponent: FC<IDigestProps> = ({
  digests,
  data = { next: '', prev: '' },
  controls = false,
  column = false,
  containerClass,
}) => {
  const [page, setPage] = useState(1);
  const { lang } = useSelectorTyped((store) => store.app);
  const { next, prev } = data;
  const MIN_PAGE = 1;
  const MAX_PAGE = useMemo(() => Math.ceil(digest.length / POSTS_PER_PAGE), []);

  const getPosts = useCallback(() => {
    const result = [];
    const startIndex = (page - 1) * POSTS_PER_PAGE;

    for (let i = startIndex; i < startIndex + POSTS_PER_PAGE && i < digests.length; i++) {
      result.push(digests[i]);
    }

    return result;
  }, [digests, page]);

  const [posts, setPosts] = useState(getPosts);

  const classNames = {
    titleClassName: titleClass,
    labelClassName: labelClass,
  };

  function handlerOnPrevPage() {
    if (page > MIN_PAGE) {
      setPage(page - 1);
    }
  }

  function handlerOnNextPage() {
    if (page < MAX_PAGE) {
      setPage(page + 1);
    }
  }

  useLayoutEffect(() => {
    setPosts(getPosts());
  }, [page, getPosts]);

  return (
    <div className={`${containerClass} ${wrapper}`} data-testid='digest-component'>
      <ul className={`${column && columnClass} ${container}`}>
        {posts.map(({ preview, body, label, title, id }) => (
          <Link
            className={`${column && columnClass} ${digestClass}`}
            href={`/${lang}/${Routes.POST}/${id}`}
            key={id}
            data-testid='digest-post'>
            <div className={`${column && columnClass} ${imageContainer}`}>
              <Image className={image} src={preview} alt={label} />
            </div>
            <div className={content}>
              <MainContent body={body} label={label} title={title} classNames={classNames} />
            </div>
          </Link>
        ))}
      </ul>
      {data && controls && (
        <div className={controlsClass}>
          <button
            className={`${buttonClass} ${page === MIN_PAGE && disabled}`}
            onClick={handlerOnPrevPage}
            data-testid='digest-controls-next'>
            {prev}
          </button>
          <button
            className={`${buttonClass} ${page === MAX_PAGE && disabled}`}
            onClick={handlerOnNextPage}
            data-testid='digest-controls-prev'>
            {next}
          </button>
        </div>
      )}
    </div>
  );
};

export const Digest = memo(DigestConponent);
