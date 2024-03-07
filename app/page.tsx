import Card from '@/lib/components/Card'
import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-39.jpg'
import bannerImage3 from '@/public/tuohinen-40.jpg'
import ContactForm from './_components/ContactForm'

export default function Home () {

  return <main className='min-h-screen p-24 w-full'>

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
  </main>
}


const Separator = () => <div className='' style={{ margin: '260px', borderBottom: '1px solid rgba(255,255,255,0.2)' }} />
