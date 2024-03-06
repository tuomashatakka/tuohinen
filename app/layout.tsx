import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Navigation from './_components/Navigation'
import { classNameWithFont } from '@/theme/fonts'
import { Subtitle, Title } from '@/components/Type'

import '@/styles/globals.css'

import heroImage from '@/public/tuohinen-39.jpg'
import logoImage from '@/public/tuohinen-logoLogo-OG.png'
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
          <Image image={ logoImage } width={96} alt='Tuohinen logo' className='logo' />
          <div>
            <Title>{metadata.title}</Title>
            <Subtitle>{metadata.description}</Subtitle>
          </div>
        </header>
      </section>

      <Navigation />

      <main>
        { children }
      </main>

    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>

// const Carousel = () =>
//   <section className='banner'>
//     <CarouselComponent slides={[
//       bannerImage,
//       bannerImage2,
//       bannerImage3,
//     ]} />
//     <Title>{metadata.title}</Title>
//     <Navigation />
//   </section>
