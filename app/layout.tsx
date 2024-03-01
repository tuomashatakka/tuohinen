import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Navigation from './_components/Navigation'
import { classNameWithFont } from '@/theme/fonts'
import { Background } from '@/components/Image'
import { Title } from '@/components/Type'

import '@/styles/globals.css'

import bannerImage from '@/public/tuohinen-hero.jpg'


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
      <section className='banner'>
        <Background image={bannerImage.src} />
        <Title>{metadata.title}</Title>
      </section>
      <Navigation />
      { children }
    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
