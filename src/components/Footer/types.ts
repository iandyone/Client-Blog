import { INavigation } from '@appTypes';

import { IFooterFormProps } from './Form/types';

export interface IFooterProps {
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
