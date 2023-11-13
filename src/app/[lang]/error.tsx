'use client';
import '@styles/global.scss';

import { Title } from '@ui';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {}, [error]);

  return (
    <div className='errorBoundary'>
      <Title>Something went wrong!</Title>
      <h3>{error.message}</h3>
      <button className='button' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
