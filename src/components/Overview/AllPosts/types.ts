import { IPost } from '@appTypes';

export interface IAllPostsProps extends IAllPostsData {
  posts: IPost[];
}

export interface IAllPostsData {
  titleText: string;
  lintText: string;
}
