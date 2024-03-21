'use client'

import { PropsWithChildren, UIEventHandler, useCallback } from 'react'
import classNames from 'classnames'
import colors from '@/theme/colors'


export default function Button ({ children, onClick }: PropsWithChildren<{ onClick?: UIEventHandler }>) {
  const className = classNames('button', colors.primary, 'font-black', 'my-6', 'py-2', 'px-4', 'rounded-xs', 'text-2xl')

  return <button onClick={ onClick } className={ className }>
    { children }
  </button>
}


export function AlertButton ({ children }: PropsWithChildren<{}>) {
  const callback = () => alert('mahdollista vasta ensi vuonna :(')
  const handleButtonPress = useCallback(callback, [])

  return <Button onClick={handleButtonPress}>
    {children}
  </Button>
}
