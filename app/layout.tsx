import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'

const inter = Inter({ subsets: [ 'latin' ]})

interface Meta extends Metadata {
  title: string
}

export const metadata: Meta = {
  title:        'Tuohinen Tunnelmavalaisimet',
  description:  'Tuo luonto kotiisi',
}


export default function RootLayout ({ children }: RootLayoutProps) {
  return <html lang='en'>
    <body className={inter.className}>{ children }</body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
