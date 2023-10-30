'use client';

import '@styles/global.scss';

import { Pages } from '@appTypes/enums';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push(Pages.HOME);
  });

  return <div className='test'>Start page</div>;
}
