import { IPost } from '@appTypes';

export interface IFeaturedPostProps extends IFeaturedPostData {
  post: IPost;
}

export interface IFeaturedPostData {
  titleText: string;
  buttonText: string;
}
