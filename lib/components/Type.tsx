import { classNameWithFont } from '@/theme/fonts'
import { ClassAttributes, DetailedHTMLProps, HTMLAttributes, HTMLProps, PropsWithChildren } from 'react'

type TitlePropsType = PropsWithChildren<{ className?: string }>

type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

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

export const H2 = (props: HeadingProps) =>
  <h2 { ...props }>{ props.children }</h2>

export const H3 = (props: HeadingProps) =>
  <h3 { ...props }>{ props.children }</h3>

export const H4 = (props: HeadingProps) =>
  <h4 { ...props }>{ props.children }</h4>
