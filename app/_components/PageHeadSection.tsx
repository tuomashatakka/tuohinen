import { Subtitle, Title } from '@/components/Type'
import heroImage from '@/public/tuohinen-39.jpg'
import logoImage from '@/public/logo-white.png'
import Image from '@/lib/components/Image'
import { metadata } from '../layout'

export default function PageHeadSection () {
  return <section className='banner min-h-screen animate-blur-in'>
    <Image image={heroImage} alt='background' className='backdrop' />
    <header>
      <Image image={logoImage} alt='Tuohinen logo' className='logo' width={240} />
      <div>
        <Title>{metadata.title}</Title>
        <Subtitle>
          {/* Tuo <AnimatedWord words={[ 'luonto', 'valo', 'tuohinen' ]} /> kotiisi. */}
          {metadata.description}
        </Subtitle>
      </div>
    </header>
  </section>
}
