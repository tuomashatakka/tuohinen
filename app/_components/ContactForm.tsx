'use client'

import Form from '@/lib/components/Form'
import { Title } from '@/lib/components/Type'


export default function ContactForm () {
  return <div>
    <div className='label'>
      <span />
      <Title>Tilaa ilmainen esittely</Title>
    </div>
    <Form onSubmit={ (data) => alert(JSON.stringify(data)) } />
  </div>
}
