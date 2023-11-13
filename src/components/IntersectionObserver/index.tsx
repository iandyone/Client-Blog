'use client';

import { FC, memo, useEffect, useRef, useState } from 'react';

import { Placeholder } from './Placeholder';
import { LazyLoadProps } from './types';

const IntersectionObserverComponent: FC<LazyLoadProps> = (props) => {
  const { children, height, once, width, observerOptions } = props;
  const [isIntersecting, setIntersecting] = useState(false);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const child = childRef.current as HTMLDivElement;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);

      if (once && entry.isIntersecting) {
        observer.unobserve(child);
      }
    }, observerOptions);

    observer.observe(child);

    return () => observer.unobserve(child);
  }, []);

  if (once && isIntersecting) return children;

  return (
    <section ref={childRef}>
      {isIntersecting ? children : <Placeholder width={width} height={height} />}
    </section>
  );
};

export const Observer = memo(IntersectionObserverComponent);
