import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { classNameWithFont } from '@/theme/fonts'

import Navigation from './_components/Navigation'
import '@/styles/globals.css'


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
      <Navigation />
      { children }
    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
