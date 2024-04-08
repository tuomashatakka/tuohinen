import { Subtitle, Title } from '@/components/Type'
import logoImage from '@/public/logo-white.png'
import Image from '@/lib/components/Img'
import metadata from '@/metadata'

import style from './PageHeadSection.module.css'
import ScrollDownButton from './ScrollDownButton'
import CarouselComponent from '@/lib/components/Carousel'

const SLIDES = [
  require('@/public/hero/lukee.jpg').default,
  require('@/public/hero/tunnelmoi.jpg').default,
  require('@/public/hero/hakkaa.jpg').default,
  require('@/public/hero/istuu.jpg').default,
  require('@/public/hero/kyykkii.jpg').default,
]

export default function PageHeadSection () {
  return <>
    <section className='banner min-h-screen animate-blur-in'>
      <CarouselComponent
        className='h-100 h-screen'
        slides={ SLIDES } />
      {/* <Image image={heroImage} alt='background' className='backdrop' /> */}
      <header className={ style.heading_content }>
        <Image image={logoImage} alt='Tuohinen logo' className={style.logo} width={160} height={160} />
        <div>
          <Title>{metadata.title}</Title>
          <Subtitle>{metadata.description}</Subtitle>
        </div>
      </header>

      <ScrollDownButton />
    </section>
  </>
}
