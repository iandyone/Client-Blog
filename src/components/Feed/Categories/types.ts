import { Category } from '@appTypes/enums';
import { handler, handlerCategory, handlerString, tagsHandler } from '@appTypes/types';

export interface ICategoriesMenuPropsData {
  categoriesTitle: string;
  tagsTitle: string;
  placeholder: string;
  buttonText: string;
  noResults: string;
}

export interface ICategoriesMenuProps {
  currentCategory: Category;
  handlerCategory: handlerCategory;
  tagsHandler: tagsHandler;
  inputOnChange: handlerString;
  onSubmit: handler;
  inputValue: string;
  data: ICategoriesMenuPropsData;
}
