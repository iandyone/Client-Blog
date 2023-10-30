'use client';

import { Viewports } from '@appTypes/enums';
import { useEffect, useState } from 'react';

export const useMobile = () => {
  const [width, setWidth] = useState(getState);

  function getState() {
    return typeof window !== 'undefined' ? window.innerWidth : 1440;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return width <= Viewports.TABLET;
};
