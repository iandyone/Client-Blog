import { IDigest } from '@appTypes';

export interface IAuthorPostsProps {
  posts: IDigest[];
  data: {
    title: string;
  };
}
