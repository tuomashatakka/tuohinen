import Navigation from './Navigation'
import PageHeadSection from './PageHeadSection'
import { NavigationProvider } from './NavigationContext'
import { Lightbox } from '@/components/Lightbox'
import { RootLayoutProps } from '../layout'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

export default function BodyContent ( { children }: RootLayoutProps ) {
  return <LanguageProvider>
    <NavigationProvider>
      <PageHeadSection />
      <Lightbox>
        <div className='main-content-wrapper'>
          <Navigation />
          <main className='main-content min-h-screen'>
            {children}
          </main>
          <footer style={{ height: '25vh' }}>
          </footer>
        </div>
      </Lightbox>
    </NavigationProvider>
  </LanguageProvider>
}
