import { Category } from '@appTypes/enums';
import { categoryHandler, handler, handlerString, tagsHandler } from '@appTypes/types';

export interface ICategoriesMenuPropsData {
  categoriesTitle: string;
  tagsTitle: string;
  placeholder: string;
  buttonText: string;
  noResults: string;
}

export interface ICategoriesMenuProps {
  currentCategory: Category;
  categoryHandler: categoryHandler;
  tagsHandler: tagsHandler;
  inputOnChange: handlerString;
  onSubmit: handler;
  inputValue: string;
  data: ICategoriesMenuPropsData;
}
