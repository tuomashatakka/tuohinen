'use client'
import { Title } from '@/components/Type'
import ScrollDownButton from './ScrollDownButton'
import CarouselComponent from '@/lib/components/Carousel'

import slides from './PageHeadImages'
import style from './PageHeadSection.module.sass'
import { useActivePage } from './Navigation'


export default function PageHeadSection () {
  const page = useActivePage()

  return <section className='banner min-h-screen animate-blur-in'>
    <CarouselComponent className='h-100 h-screen' slides={ slides } />

    <header className={ style.heading_content }>
      <Title>
        <span className={ style.title }>Tuohinen tunnelmavalaisimet</span>
        <span className={ style.slogan }>tuo luonto kotiisi.</span>
        { page?.id !== 'etusivu'
          ? <span className={ style.subtitle }>{ page?.text }</span>
          : null }
      </Title>
    </header>

    <ScrollDownButton />
  </section>
}
