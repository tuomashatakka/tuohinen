import { PropsWithChildren } from 'react'

import { classNameWithFont } from '@/theme/fonts'
import metadata from '@/lib/metadata'

import '@/styles/globals.scss'
import BodyContent from './_components/BodyContent'


const className = classNameWithFont('epilogue')

export default function RootLayout ({ children }: RootLayoutProps) {
  const bodyClassName = className()

  return <html lang='en'>
    <head>
      <title>{ metadata.title }</title>
    </head>
    <body className={bodyClassName}>
      <BodyContent>
        {children}
      </BodyContent>
    </body>
  </html>
}

export type RootLayoutProps = Readonly<PropsWithChildren<unknown>>
