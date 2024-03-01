import { classNameWithFont } from '@/theme/fonts'
import { PropsWithChildren } from 'react'

type TitlePropsType = PropsWithChildren<{ className?: string }>

const classNameWithAntonioFont = classNameWithFont('antonio')

export const Title = ({ children, className }: Readonly<TitlePropsType>) =>
  <h1 className={classNameWithAntonioFont('heading', className)}>
    {children}
  </h1>

export const Subtitle = ({ children, className }: Readonly<TitlePropsType>) =>
  <p className={classNameWithAntonioFont('subheading', className)}>
    {children}
  </p>

export const Heading = ({ children }: Readonly<TitlePropsType>) =>
  <h1 className='font-bold text-xl mb-2'>
    { children }
  </h1>
