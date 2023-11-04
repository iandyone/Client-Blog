import { Category } from '@appTypes/enums';
import { Language } from '@appTypes/types';

export interface ICategoryPageProps {
  params: {
    lang: Language;
    category: Category;
  };
}

export interface ICategoryBanner {
  title: string;
  text: string;
  label: string;
}
