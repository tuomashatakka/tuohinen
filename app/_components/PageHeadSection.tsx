import { Subtitle, Title } from '@/components/Type'
import ScrollDownButton from './ScrollDownButton'
import CarouselComponent from '@/lib/components/Carousel'

import slides from './PageHeadImages'
import style from './PageHeadSection.module.sass'


export default function PageHeadSection () {
  return <section className='banner min-h-screen animate-blur-in'>
    <CarouselComponent className='h-100 h-screen' slides={ slides } />

    <header className={ style.heading_content }>
      <Subtitle>
        Tuohinen tunnelmavalaisimet
      </Subtitle>

      <Title>
       tuo luonto kotiisi.
      </Title>
    </header>

    <ScrollDownButton />
  </section>
}
