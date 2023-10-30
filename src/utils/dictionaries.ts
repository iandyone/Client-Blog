import 'server-only';

import { Language } from '@appTypes/types';

const dictionaries = {
  en: () => import('@public/dictionaries/en.json').then((module) => module.default),
  ru: () => import('@public/dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = (locale: Language) => dictionaries[locale]();
