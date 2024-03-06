import Card from '@/lib/components/Card'
import bannerImage from '@/public/tuohinen-hero.jpg'
import bannerImage2 from '@/public/tuohinen-39.jpg'
import bannerImage3 from '@/public/tuohinen-40.jpg'

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

    <div className='z-10 max-w-5xl w-full items-center justify-between'>
    </div>

    <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <h3>Yhteydenotot</h3>
      <a href='mailto:kakka@kakka.fi'>kakka@kakka.fi</a>
    </div>
  </main>
}
