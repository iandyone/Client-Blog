import { IUser } from '@appTypes';

export interface IAuthorProps {
  author?: IUser;
  data: {
    title: string;
    about: string;
  };
}
