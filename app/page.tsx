import { metadata } from './layout'

export default function Home () {

  return <main className='flex min-h-screen flex-col items-center justify-between p-24'>

    <section className='hero'>

    </section>

    <div className='card'>

    </div>
    <div className='z-10 max-w-5xl w-full items-center justify-between'>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
    </div>

    <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <h3>Yhteydenotot</h3>
      <a href='mailto:kakka@kakka.fi'>kakka@kakka.fi</a>
    </div>
  </main>
}
