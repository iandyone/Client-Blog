import 'server-only';

import { Language, Translation } from '@appTypes/types';

export function getDictionary(locale: Language, translation: Translation) {
  return import(`@public/images/dictionaries/${locale}/${translation}.json`).then((module) => module.default);
}
