import { Language } from '@appTypes/types';

export interface IBlogPostProps {
  params: {
    lang: Language;
    id: number;
  };
}
