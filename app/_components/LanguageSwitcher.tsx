'use client'

import { useLanguage, SUPPORTED_LANGUAGES } from '@/lib/i18n/LanguageContext'
import { classNameWithFont } from '@/theme/fonts'

const classNamesWithMontserrat = classNameWithFont('montserrat')

export default function LanguageSwitcher () {
  const { language, setLanguage } = useLanguage()

  return <div className={ classNamesWithMontserrat('language-switcher flex gap-2') }>
    {SUPPORTED_LANGUAGES.map((lang) => 
      <button
        key={ lang }
        onClick={ () => setLanguage(lang) }
        className={ `uppercase px-2 py-1 text-sm ${
          language === lang ? 'font-bold' : 'opacity-70'
        }` }>
        {lang}
      </button>
    )}
  </div>
} 