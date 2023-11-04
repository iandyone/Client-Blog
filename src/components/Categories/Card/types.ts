import { ICategory } from '@appTypes';
import { Language } from '@appTypes/types';

export interface ICategoryCardProps extends ICategory {
  lang: Language;
}
