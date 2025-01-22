import { INavigation } from '@appTypes';
import { Language } from '@appTypes/types';

export interface INavigationProps {
  type?: 'short' | 'full';
  data: INavigation;
  lang: Language;
}
