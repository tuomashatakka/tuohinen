import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Navigation from './_components/Navigation'
import PageHeadSection from './_components/PageHeadSection'
import { classNameWithFont } from '@/theme/fonts'

import '@/styles/globals.css'


// import classNames from 'classnames'


interface Meta extends Metadata {
  title: string
}

export const metadata: Meta = {
  title:        'Tuohinen Tunnelmavalaisimet',
  description:  'Tuo luonto kotiisi',
}


const classNameWithInter = classNameWithFont('epilogue')


export default function RootLayout ({ children }: RootLayoutProps) {
  const bodyClassName = classNameWithInter()

  return <html lang='en'>
    <body className={bodyClassName}>
      <PageHeadSection />
      <div className='main-content-wrapper'>
        <Navigation />
        <main className='main-content min-h-screen'>
          { children }
        </main>
      </div>
    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
