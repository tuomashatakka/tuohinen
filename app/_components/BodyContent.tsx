import Navigation from './Navigation'
import PageHeadSection from './PageHeadSection'
import { NavigationProvider } from './NavigationContext'
import { Lightbox } from '@/components/Lightbox'
import { RootLayoutProps } from '../layout'


export default function BodyContent ( { children }: RootLayoutProps ) {
  return <NavigationProvider>
    <PageHeadSection />
    <Lightbox>
      <div className='main-content-wrapper'>
        <Navigation />
        <main className='main-content min-h-screen'>
          {children}
        </main>
      </div>
    </Lightbox>
  </NavigationProvider>
}
