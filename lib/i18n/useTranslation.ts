'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useLanguage } from './LanguageContext'
import getDictionary from './get-dictionary'

interface Dictionary {
  [key: string]: Dictionary | string;
}

export default function useTranslation () {
  const { language } = useLanguage()
  const [ dictionary, setDictionary ] = useState<Dictionary>({})

  useEffect(() => {
    getDictionary(language)
      .then((data) => setDictionary(data))
      .catch(console.error) // eslint-disable-line no-console
  }, [ language ])

  const t = (...key: string[]): string[] | string => {
    const value = key
      .join('.')
      .split('.')
      .reduce((obj: Dictionary | string, k: string) => {
        if (typeof obj === 'string')
          return obj
        else
          return obj?.[k]
      }, dictionary)

    return value?.toString() || key
  }

  return { t, language }
}
