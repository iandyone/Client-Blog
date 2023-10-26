'use client';

import { store } from '@store';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { IReduxProviderProps } from './types';

export const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
