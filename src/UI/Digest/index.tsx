'use client';

import { Routes } from '@appTypes/enums';
import { MainContent } from '@components/MainContent';
import { digest } from '@constants/data';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

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
} = styles;
const POSTS_PER_PAGE = 5;

const DigestConponent: FC<IDigestProps> = ({ digests, containerClass, data, controls = false }) => {
  const { next, prev } = data;
  const [page, setPage] = useState(1);
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

  useEffect(() => {
    setPosts(getPosts());
  }, [page, getPosts]);

  return (
    <div className={`${containerClass} ${wrapper}`}>
      <ul className={container}>
        {posts.map(({ preview, body, label, title, id }) => (
          <Link className={digestClass} href={`${Routes.POST}/${id}`} key={id}>
            <div className={imageContainer}>
              <Image className={image} src={preview} alt={label} />
            </div>
            <div className={content}>
              <MainContent body={body} label={label} title={title} classNames={classNames} />
            </div>
          </Link>
        ))}
      </ul>
      {controls && (
        <div className={controlsClass}>
          <button className={`${buttonClass} ${page === MIN_PAGE && disabled}`} onClick={handlerOnPrevPage}>
            {prev}
          </button>
          <button className={`${buttonClass} ${page === MAX_PAGE && disabled}`} onClick={handlerOnNextPage}>
            {next}
          </button>
        </div>
      )}
    </div>
  );
};

export const Digest = memo(DigestConponent);
