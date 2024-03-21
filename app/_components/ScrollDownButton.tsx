'use client'

import { useRef } from 'react'

import style from './ScrollDownButton.module.css'

export default function ScrollDownButton () {
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (!ref.current || !ref.current.parentElement)
      return
    const { x, height } = ref.current.parentElement.getBoundingClientRect()
    window.scrollTo(x, height)
  }

  return <button
    ref={ ref }
    onClick={ handleClick }
    className={ style.scrollDownButton }
    aria-label='Scroll to content' />
}
