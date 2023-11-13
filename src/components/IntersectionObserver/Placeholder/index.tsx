'use client';

import { FC } from 'react';

import { IPlaceholderProps } from './types';

export const Placeholder: FC<IPlaceholderProps> = ({ height, width }) => {
  const elementWidth = width && typeof width === 'string' ? width : width + 'px';
  const elementHeight = height && typeof height === 'string' ? height : height + 'px';

  return <div className='child-placeholder' style={{ width: elementWidth, height: elementHeight }} />;
};
