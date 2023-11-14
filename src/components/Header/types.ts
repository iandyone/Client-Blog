import { INavigation } from '@appTypes';
import { Language } from '@appTypes/types';

export interface IHeaderProps {
  lang: Language;
  data: {
    headerLogoText: string;
    buttonText: string;
  };
  navigation: INavigation;
}
