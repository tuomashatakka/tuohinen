'use client'

import { useLanguage, SUPPORTED_LANGUAGES } from '@/lib/i18n/LanguageContext'
import { classNameWithFont } from '@/theme/fonts'
import classNames from 'classnames'

const classNamesWithMontserrat = classNameWithFont('montserrat')

export default function LanguageSwitcher () {
  const { language, setLanguage } = useLanguage()

  return <ul className={ classNamesWithMontserrat('language_switcher list') }>
    {SUPPORTED_LANGUAGES.map((lang) => {
      const active    = lang === language
      const className = classNames('list_item', { list_item_active: active })

      return <li className={ className } key={ lang }>
        <span
          key={ lang }
          onClick={ () => setLanguage(lang) }
          className='list_item_link'>
          {lang}
        </span>
      </li>
    }
    )}
  </ul>
}