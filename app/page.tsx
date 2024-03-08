import Card from '@/lib/components/Card'
import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-39.jpg'
import bannerImage3 from '@/public/tuohinen-40.jpg'
import ContactForm from './_components/ContactForm'
import { Fragment } from 'react'
import { Title } from '@/lib/components/Type'
import Image from 'next/image'

export default function Home () {

  return <Fragment>

    <section className='segment-primary flex space-between p-1'>
      <div style={{ flex: '1 1 auto', alignContent: 'center', textAlign: 'right' }} className=' p-8'>
        <Title>Luonnollista valoa</Title>
        <p>
          kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
          kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa kakka pissa
        </p>
      </div>
      <div style={{ flex: '1 0 auto' }}>
        <Image width={640} height={640} className='object-cover w-full' src={bannerImage} alt='Tits or gtfo' />
      </div>
    </section>

    <Separator />

    <div className='cards'>
      <Card title='tuote 1' image={bannerImage}>
        Ensimmäinen tuote!
      </Card>

      <Card title='tuote 2' image={bannerImage2}>
        tokca tuote!
      </Card>

      <Card title='tuote 3' image={bannerImage3}>
        3. tuote!
      </Card>
    </div>

    <Separator />

    <div className='cards'>
      <Card title='tuote 1' image={bannerImage}>
        Ensimmäinen tuote!
      </Card>

      <Card title='tuote 2' image={bannerImage3}>
        tokca tuote!
      </Card>
    </div>

    <Separator />

    <ContactForm />

    <Separator />
  </Fragment>
}


const Separator = () => <div className='' style={{ margin: '260px', borderBottom: '1px solid rgba(255,255,255,0.2)' }} />
