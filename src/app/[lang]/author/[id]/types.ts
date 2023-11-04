import { Language } from '@appTypes/types';

export interface IAuthorPageProps {
  params: {
    lang: Language;
    id: number;
  };
}
