import { INavigation } from '@appTypes';

export interface INavigationProps {
  type?: 'short' | 'full';
  data: INavigation;
}
