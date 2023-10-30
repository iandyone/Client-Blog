'use client';

import prevSlide from '@public/images/icons/arrowLeft.svg';
import nextSlide from '@public/images/icons/arrowRight.svg';
import Image from 'next/image';
import { Children, cloneElement, FC, useEffect, useRef, useState } from 'react';

import styles from './carousel.module.scss';
import { ICarouselProps } from './types';

const { wrapper, container, windowClass, navigation, button } = styles;

export const Carousel: FC<ICarouselProps> = ({ children, className }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState<number>(0);
  const windowRef = useRef(null);
  const [width, setWIdth] = useState<number>(0);

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
    setWIdth(width);
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
    <article className={`${wrapper} ${className}`}>
      <div className={windowClass} ref={windowRef}>
        <div className={container} style={{ transform: `translateX(${offset}px)` }}>
          {pages}
        </div>
        <div className={navigation}>
          <Image className={button} src={prevSlide} alt='next' onClick={handlerPrevSlide} />
          <Image className={button} src={nextSlide} alt='prev' onClick={handlerNextSlide} />
        </div>
      </div>
    </article>
  );
};
