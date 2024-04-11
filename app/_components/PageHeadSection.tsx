import { Subtitle, Title } from '@/components/Type'
import metadata from '@/metadata'

import ScrollDownButton from './ScrollDownButton'
import CarouselComponent from '@/lib/components/Carousel'

import style from './PageHeadSection.module.scss'
import slides from './PageHeadImages'

export default function PageHeadSection () {
  return <>
    <section className='banner min-h-screen animate-blur-in'>
      <CarouselComponent
        className='h-100 h-screen'
        slides={ slides } />
      {/* <Image image={heroImage} alt='background' className='backdrop' /> */}
      <header className={ style.heading_content }>
        <Subtitle>
          {metadata.title}
        </Subtitle>
        <Title>
          <div className='rotating-text-container'>
            <span>Tuo</span>
            <span className='rotating-text'>
              <span>luonto</span>
              <span>lämpö</span>
              <span>valo</span>
              <span>luonto</span>
              <span>lämpö</span>
              <strong>valo</strong>
            </span>
            <span>kotiisi.</span>
          </div>
        </Title>
      </header>

      <ScrollDownButton />
    </section>
  </>
}
