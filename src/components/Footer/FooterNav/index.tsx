'use client';

import { Navigation } from '@components/Navigation';
import { useMobile } from '@hooks/window';
import { FC } from 'react';

export const FooterNav: FC = () => {
  const isMobile = useMobile();

  return <>{!isMobile && <Navigation />}</>;
};
