import { Subtitle, Title } from '@/components/Type'
import heroImage from '@/public/tuohinen-39.jpg'
import logoImage from '@/public/logo-white.png'
import Image from '@/lib/components/Img'
import metadata from '@/metadata'

import style from './PageHeadSection.module.css'
import ScrollDownButton from './ScrollDownButton'

export default function PageHeadSection () {
  return <section className='banner min-h-screen animate-blur-in'>
    <Image image={heroImage} alt='background' className='backdrop' />
    <header>
      <Image image={logoImage} alt='Tuohinen logo' className={style.logo} />
      <div>
        <Title>{metadata.title}</Title>
        <Subtitle>{metadata.description}</Subtitle>
      </div>
    </header>

    <ScrollDownButton />
  </section>
}
