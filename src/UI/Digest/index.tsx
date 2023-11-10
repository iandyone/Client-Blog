'use client';

import { Routes } from '@appTypes/enums';
import { MainContent } from '@components/MainContent';
import { imagePlaceholder } from '@constants/animations';
import { digest } from '@constants/data';
import { useSelectorTyped } from '@hooks/redux';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo, useCallback, useLayoutEffect, useMemo, useState } from 'react';

import styles from './digest.module.scss';
import { IDigestProps } from './types';

const POSTS_PER_PAGE = 5;

const DigestConponent: FC<IDigestProps> = (props) => {
  const { digests, data = { next: '', prev: '' }, controls = false, column = false, containerClass } = props;
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
  const classNames = useMemo(
    () => ({
      titleClassName: styles.titleClass,
      labelClassName: styles.labelClass,
    }),
    [],
  );

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
    <div className={`${containerClass} ${styles.wrapper}`} data-testid='digest-component'>
      <ul className={`${column && styles.columnClass} ${styles.container}`}>
        {posts.map(({ preview, body, label, title, id }) => (
          <Link
            className={`${column && styles.columnClass} ${styles.digestClass}`}
            href={`/${lang}/${Routes.POST}/${id}`}
            key={id}
            data-testid='digest-post'>
            <div className={`${column && styles.columnClass} ${styles.imageContainer}`}>
              <Image
                className={styles.image}
                src={preview}
                alt={label}
                placeholder={`data:image/${imagePlaceholder}`}
              />
            </div>
            <div className={styles.content}>
              <MainContent body={body} label={label} title={title} classNames={classNames} />
            </div>
          </Link>
        ))}
      </ul>
      {data && controls && (
        <div className={styles.controlsClass}>
          <button
            className={`${styles.buttonClass} ${page === MIN_PAGE && styles.disabled}`}
            onClick={handlerOnPrevPage}
            data-testid='digest-controls-next'>
            {prev}
          </button>
          <button
            className={`${styles.buttonClass} ${page === MAX_PAGE && styles.disabled}`}
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
