import { Subtitle, Title } from '@/components/Type'
import metadata from '@/metadata'
import ScrollDownButton from './ScrollDownButton'
import CarouselComponent from '@/lib/components/Carousel'

import slides from './PageHeadImages'
import style from './PageHeadSection.module.sass'



const RotatingText = ({ prefix, suffix, children }: { prefix: string, suffix: string, children: string }) =>
  <div className='rotating-text-container'>
    <span>{prefix}</span>
    <span className='rotating-text'>
      {children.split(/\s´+/).map(text =>
        <span key={ text }>{text}</span>)}
    </span>
    <span>{suffix}</span>
  </div>


export default function PageHeadSection () {
  return <section className='banner min-h-screen animate-blur-in'>
    <CarouselComponent className='h-100 h-screen' slides={ slides } />

    <header className={ style.heading_content }>
      <Subtitle>
        {metadata.title}
      </Subtitle>

      <Title>
        <RotatingText prefix='tuo' suffix='kotiisi.'>
          luonto lämpö valo luonto lämpö valo
        </RotatingText>
      </Title>
    </header>

    <ScrollDownButton />
  </section>
}
