import { classNameWithFont } from '@/theme/fonts'
import { PropsWithChildren } from 'react'

type TitlePropsType = PropsWithChildren<{ className?: string }>

const classNameWith = classNameWithFont('epilogue')

export const Title = ({ children, className }: Readonly<TitlePropsType>) =>
  <h1 className={classNameWith(className)}>
    {children}
  </h1>

export const Subtitle = ({ children, className }: Readonly<TitlePropsType>) =>
  <p className={classNameWith('subheading', className)}>
    {children}
  </p>

export const Heading = ({ children }: Readonly<TitlePropsType>) =>
  <h1 className='font-bold text-xl mb-2'>
    { children }
  </h1>

export const Subheading = ({ children }: Readonly<TitlePropsType>) =>
  <h2 className='font-bold text-lg mb-2'>
    { children }
  </h2>
