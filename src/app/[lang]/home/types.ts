import { Language } from '@appTypes/types';
import { ReactElement } from 'react';

export interface IHomePageProps {
  params: {
    lang: Language;
  };
}

export interface IHomeLayourProps extends IHomePageProps {
  children: ReactElement;
}
