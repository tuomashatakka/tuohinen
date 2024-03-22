import { PropsWithChildren } from 'react'

import Navigation from './_components/Navigation'
import PageHeadSection from './_components/PageHeadSection'
import { classNameWithFont } from '@/theme/fonts'

import '@/styles/globals.css'
import { NavigationProvider } from './_components/NavigationContext'


const className = classNameWithFont('epilogue')

export default function RootLayout ({ children }: RootLayoutProps) {
  const bodyClassName = className()

  return <html lang='en'>
    <body className={bodyClassName}>
      <PageHeadSection />
      <div className='main-content-wrapper'>
        <NavigationProvider>
          <Navigation />
          <main className='main-content min-h-screen'>
            { children }
          </main>
        </NavigationProvider>
      </div>
    </body>
  </html>
}

type RootLayoutProps = Readonly<PropsWithChildren<{}>>
