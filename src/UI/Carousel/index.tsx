'use client';

import { imagePlaceholder } from '@constants/animations';
import prevSlide from '@public/images/icons/arrowLeft.svg';
import nextSlide from '@public/images/icons/arrowRight.svg';
import Image from 'next/image';
import { Children, cloneElement, FC, useEffect, useRef, useState } from 'react';

import styles from './carousel.module.scss';
import { ICarouselProps } from './types';

export const Carousel: FC<ICarouselProps> = ({ children, className }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState<number>(0);
  const windowRef = useRef(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: '100%',
            maxWidth: '100%',
          },
        });
      }),
    );
  }, [children]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    const width = windowRef.current.offsetWidth;
    setWidth(width);
    setOffset(0);
  }

  function handlerPrevSlide() {
    setOffset((currentOffset) => Math.min(currentOffset + width, 0));
  }

  function handlerNextSlide() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length - 1));

      return Math.max(maxOffset, newOffset);
    });
  }

  return (
    <article className={`${styles.wrapper} ${className}`} data-testid='carousel'>
      <div className={styles.windowClass} ref={windowRef}>
        <div className={styles.container} style={{ transform: `translateX(${offset}px)` }}>
          {pages}
        </div>
        <div className={styles.navigation}>
          <Image
            className={styles.button}
            src={prevSlide}
            alt='next'
            onClick={handlerPrevSlide}
            placeholder={`data:image/${imagePlaceholder}`}
            data-testid='carousel-button-next'
          />
          <Image
            className={styles.button}
            src={nextSlide}
            alt='prev'
            onClick={handlerNextSlide}
            placeholder={`data:image/${imagePlaceholder}`}
            data-testid='carousel-button-prev'
          />
        </div>
      </div>
    </article>
  );
};
