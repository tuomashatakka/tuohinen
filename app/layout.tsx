import { PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { classNameWithFont } from '@/theme/fonts'
import metadata from '@/lib/metadata'
import BodyContent from './_components/BodyContent'

import '@/styles/globals.scss'


const className = classNameWithFont('epilogue')

export default function RootLayout ({ children }: RootLayoutProps) {
  const bodyClassName = className()

  return <html lang='en'>
    <head>
      <title>{ metadata.title }</title>
      <meta property='description' content={ metadata.description as string } />
    </head>
    <body className={ bodyClassName }>
      <BodyContent>
        {children}
      </BodyContent>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
}

export type RootLayoutProps = Readonly<PropsWithChildren<unknown>>
