import type { Language } from './LanguageContext'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fi: () => import('./dictionaries/fi.json').then((module) => module.default),
  sv: () => import('./dictionaries/sv.json').then((module) => module.default),
}

export const getDictionary = async (locale: Language) => dictionaries[locale]() 