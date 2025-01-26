'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from './LanguageContext'
import { getDictionary } from './get-dictionary'

export function useTranslation() {
  const { language } = useLanguage()
  const [dictionary, setDictionary] = useState<Record<string, any>>({})

  useEffect(() => {
    getDictionary(language)
      .then(setDictionary)
      .catch(console.error)
  }, [language])

  const t = (key: string): string => {
    const value = key.split('.').reduce((obj, k) => obj?.[k], dictionary)
    return value?.toString() || key
  }

  return { t, language }
} 