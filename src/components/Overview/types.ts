import { IAllPostsData } from './AllPosts/types';
import { IFeaturedPostData } from './FeaturedPost/types';

export interface IOverviewProps {
  data: {
    featuredPost: IFeaturedPostData;
    allPosts: IAllPostsData;
  };
}
