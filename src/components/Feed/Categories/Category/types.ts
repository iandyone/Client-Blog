import { ICategoryItem } from '@appTypes';
import { Category } from '@appTypes/enums';

export interface ICategoryItemProps extends ICategoryItem {
  onClick: (category: Category) => void;
}
