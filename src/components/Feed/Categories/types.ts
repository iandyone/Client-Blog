import { Category } from '@appTypes/enums';

export interface ICategoriesMenuProps {
  data: {
    categoriesTitle: string;
    tagsTitle: string;
    placeholder: string;
    buttonText: string;
  };
  currentCategory: Category;
  categoryHandler: (category: Category) => void;
}
