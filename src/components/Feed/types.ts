import { Category } from '@appTypes/enums';

import { ICategoriesMenuPropsData } from './Categories/types';

export interface IFeedProps {
  currentCategory: Category;
  data: ICategoriesMenuPropsData;
}
