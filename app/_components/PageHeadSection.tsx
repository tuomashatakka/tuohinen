'use client'

import useTranslation from '@/lib/i18n/useTranslation'
import { useActivePage } from './Navigation'
import CarouselComponent from '@/lib/components/Carousel'
import slides from './PageHeadImages'
import ScrollDownButton from './ScrollDownButton'
import { Title } from '@/components/Type'
import style from './PageHeadSection.module.sass'

export default function PageHeadSection () {
  const page = useActivePage()
  const { t } = useTranslation()

  return <section className='banner min-h-screen animate-blur-in'>
    <CarouselComponent className='h-100 h-screen' slides={ slides } />

    <header className={ style.heading_content }>
      <Title>
        <span className={ style.title }>{t('header.title')}</span>
        <span className={ style.slogan }>{t('header.slogan')}</span>
        { page?.id !== 'etusivu' && page?.text
          ? <span className={ style.subtitle }>{t(page.text)}</span>
          : null }
      </Title>
    </header>

    <ScrollDownButton />
  </section>
}
