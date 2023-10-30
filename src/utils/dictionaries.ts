import 'server-only';

import { Language, page } from '@appTypes/types';

export function getDictionary(locale: Language, page: page) {
  return import(`@public/images/dictionaries/${locale}/${page}.json`).then((module) => module.default);
}
