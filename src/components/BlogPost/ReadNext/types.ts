import { Category } from '@appTypes/enums';

export interface IReadNextProps {
  category: Category;
  data: {
    title: string;
  };
}
