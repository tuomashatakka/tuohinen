import { PropsWithChildren } from 'react'

import Navigation from './_components/Navigation'
import PageHeadSection from './_components/PageHeadSection'
import { NavigationProvider } from './_components/NavigationContext'
import { classNameWithFont } from '@/theme/fonts'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'
import 'material-icons/iconfont/material-icons.css'
import metadata from '@/lib/metadata'


const className = classNameWithFont('epilogue')

export default function RootLayout ({ children }: RootLayoutProps) {
  const bodyClassName = className()

  return <html lang='en'>
    <head>
      <title>{ metadata.title }</title>
    </head>
    <body className={bodyClassName}>
      <PageHeadSection />
      <div className='main-content-wrapper'>
        <NavigationProvider>
          <Navigation />
          <main className='main-content min-h-screen'>
            { children }
            <Analytics />
          </main>
        </NavigationProvider>
      </div>
    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
