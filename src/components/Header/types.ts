import { INavigation } from '@appTypes';

export interface IHeaderProps {
  data: {
    headerLogoText: string;
    buttonText: string;
  };
  navigation: INavigation;
}
