import { handler } from '@appTypes/types';
import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  colored?: boolean;
  className?: string;
  onClick?: handler;
}
