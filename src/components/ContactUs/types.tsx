import { IFormProps } from './Form/types';

export interface IContactUsPropds {
  data: {
    label: string;
    title: string;
    subtitle: string;
    banner: {
      header1: string;
      header2: string;
      days: string;
      time: string;
      index: string;
      message: string;
      email: string;
    };
    form: IFormProps;
  };
}
