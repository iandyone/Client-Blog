import { ICategoryItem } from '@appTypes';
import { handlerCategory } from '@appTypes/types';

export interface ICategoryItemProps extends ICategoryItem {
  onClick: handlerCategory;
}
