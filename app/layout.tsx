import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Navigation from './_components/Navigation'
import { classNameWithFont } from '@/theme/fonts'
import { Subtitle, Title } from '@/components/Type'

import '@/styles/globals.css'

import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-hero-3.jpg'
import bannerImage3 from '@/public/tuohinen-hero-2.jpg'
import heroImage from '@/public/tuohinen-39.jpg'
import logoImage from '@/public/tuohinen-logoLogo-OG.png'
import CarouselComponent from '@/lib/components/Carousel'
import Image from '@/lib/components/Image'


interface Meta extends Metadata {
  title: string
}

export const metadata: Meta = {
  title:        'Tuohinen Tunnelmavalaisimet',
  description:  'Tuo luonto kotiisi',
}


const classNameWithInter = classNameWithFont('inter')

export default function RootLayout ({ children }: RootLayoutProps) {
  const bodyClassName = classNameWithInter()

  return <html lang='en'>
    <body className={bodyClassName}>

      <section className='banner min-h-screen'>
        <Image image={ heroImage } alt='background' className='backdrop' />

        <header>
          <Image image={ logoImage } alt='Tuohinen logo' width='96' className='logo' />
          <div>
            <Title>Tuohinen</Title>
            <Subtitle>Tuohea ja vuohea ja muuta</Subtitle>
          </div>
        </header>
      </section>

      <main>
        { children }
      </main>

      <section className='banner'>
        <CarouselComponent slides={[
          bannerImage,
          bannerImage2,
          bannerImage3,
        ]} />
        <Title>{metadata.title}</Title>
        <Navigation />
      </section>

    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
