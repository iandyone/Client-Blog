import { INavigation } from '@appTypes';
import { Language } from '@appTypes/types';

import { IFooterFormProps } from './Form/types';

export interface IFooterProps {
  lang: Language;
  data: {
    headerLogoText: string;
    bannerText: string;
    address: string;
    email: string;
    index: string;
    form: IFooterFormProps;
  };
  navigation: INavigation;
}
