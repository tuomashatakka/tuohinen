'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Language = 'fi' | 'en' | 'sv'
export const DEFAULT_LANGUAGE: Language = 'fi'
export const SUPPORTED_LANGUAGES: Language[] = ['fi', 'en', 'sv']

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    // Try to get language from sessionStorage
    const storedLang = sessionStorage.getItem('language') as Language
    if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
      setLanguageState(storedLang)
      return
    }

    // Try to get language from browser
    const browserLang = navigator.language.split('-')[0] as Language
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      setLanguageState(browserLang)
      return
    }

    // Fallback to default language
    setLanguageState(DEFAULT_LANGUAGE)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    sessionStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 