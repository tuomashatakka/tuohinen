'use client'

/* eslint-disable no-unused-vars */
import { ChangeEvent, FormEvent, FormEventHandler, useCallback, useState } from 'react'

const initialFormData = {
  contact: '',
  date: 'Huomenna',
}

export default function Form ({ onSubmit }: FormProps) {

  const [ formData, updateState ] = useState<FormData>(initialFormData)

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    onSubmit(formData)
  }, [ onSubmit, formData ])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    updateState({ ...formData, [name]: value })
  }, [ formData ])

  return <form onSubmit={ handleSubmit } className='form'>

    <label>
      <h3>Sähköpostiosoite tai puhelinnumero</h3>
      <input type='text' name='contact' value={ formData.contact } onChange={ handleChange } />
    </label>

    <label>
      <h3>Mahdollinen sopiva ajankohta</h3>
      <input type='datetime-local' name='date' value={ formData.date } onChange={ handleChange } />
    </label>

    <div className='label'>
      <span />
      <button type='submit'>Tilaa esittely</button>
    </div>
  </form>
}

type ContactFormData = {
  contact: string,
  date: string
}
type FormData = ContactFormData
type FormSubmitFn = (formData: FormData) => void
type FormProps = {
  onSubmit: FormSubmitFn
}
