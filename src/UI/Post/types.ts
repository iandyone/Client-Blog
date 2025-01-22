import { IPost } from '@appTypes';

export interface IPostProps {
  post: IPost;
  media?: boolean;
  body?: boolean;
  wrapperClassName?: string;
}
