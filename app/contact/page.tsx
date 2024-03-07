import { Fragment } from 'react'

export default function ContactPage () {

  return <Fragment>
    <div className='z-10 max-w-5xl w-full items-center justify-between'>
      Ota yhteyttä pliis
    </div>

    <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
      <h3>Yhteydenotot</h3>
      <a href='mailto:kakka@kakka.fi'>kakka@kakka.fi</a>
    </div>
  </Fragment>
}
