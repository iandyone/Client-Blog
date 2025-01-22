'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface IntersectionObserverProps {
  onIntersect: () => void;
}

const IntersectionObserverComponent: React.FC<IntersectionObserverProps> = ({ onIntersect }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      onIntersect();
    }
  }, [inView, onIntersect]);

  return <div ref={ref} />;
};

export default IntersectionObserverComponent;
