import Navigation from './Navigation'
import PageHeadSection from './PageHeadSection'
import { NavigationProvider } from './NavigationContext'
import { Lightbox } from '@/components/Lightbox'
import { RootLayoutProps } from '../layout'


export default function BodyContent ( { children }: RootLayoutProps ) {
  return <>
    <PageHeadSection />
    <Lightbox>
      <div className='main-content-wrapper'>
        <NavigationProvider>
          <Navigation />
          <main className='main-content min-h-screen'>
            {children}
          </main>
        </NavigationProvider>
      </div>
    </Lightbox>
  </>
}
