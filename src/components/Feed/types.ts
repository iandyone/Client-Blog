import { Category } from '@appTypes/enums';

import { ICategoriesProps } from './Categories/types';

export interface IFeedProps {
  currentCategory: Category;
  data: ICategoriesProps;
}
