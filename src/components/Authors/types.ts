import { IUser } from '@appTypes';
import { Language } from '@appTypes/types';

export interface IAuthorsProps {
  users?: IUser[];
  lang?: Language;
  data: {
    title: string;
  };
}
