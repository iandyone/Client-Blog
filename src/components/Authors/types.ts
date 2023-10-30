import { IUser } from '@appTypes';

export interface IAuthorsProps {
  users: IUser[];
  data: {
    title: string;
  };
}
