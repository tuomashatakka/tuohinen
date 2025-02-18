import { classNameWithFont } from '@/theme/fonts'

import style from './Type.module.scss'
import classNames from 'classnames'
import { HTMLProps } from 'react'

type HeadingProps               = HTMLProps<HTMLHeadingElement>
type ParagraphProps             = HTMLProps<HTMLParagraphElement>
type QuoteProps                 = HTMLProps<HTMLQuoteElement>

const classNameWith             = classNameWithFont('epilogue')
const classNameWithMontserrat   = classNameWithFont('montserrat')

export const Title = ({ children, className }: Readonly<HeadingProps>) =>
  <h1 className={ classNameWithMontserrat(className) }>
    {children}
  </h1>

export const Subtitle = ({ children, className }: Readonly<HeadingProps>) =>
  <p className={ classNameWithMontserrat('subheading', className) }>
    {children}
  </p>

export const Heading = ({ children }: Readonly<HeadingProps>) =>
  <h1 className='font-bold text-xl mb-2'>
    { children }
  </h1>

export const Subheading = ({ children }: Readonly<HeadingProps>) =>
  <h2 className='font-bold text-lg mb-2'>
    { children }
  </h2>

export const H2 = (props: HeadingProps) =>
  <h2 { ...props }>{ props.children }</h2>

export const H3 = ({ className, ...props }: HeadingProps) =>
  <h3 { ...props } className={ classNameWithMontserrat(className) }>{ props.children }</h3>

export const H4 = ({ className, ...props }: HeadingProps) =>
  <h4 { ...props } className={ classNameWithMontserrat(className) }>{ props.children }</h4>

export const Paragraph = (props: HeadingProps) =>
  <p { ...props }>{ props.children }</p>

export const Ingress = ({ className, ...props }: ParagraphProps) =>
  <p { ...props } className={ classNameWith(style.ingress, className) }>
    {props.children}
  </p>

export const Strong = ({ className, ...props }: ParagraphProps) =>
  <strong { ...props } className={ classNameWith(style.strong, className) }>
    {props.children}
  </strong>

export const Quote = ({ className, ...props }: QuoteProps) =>
  <blockquote { ...props } className={ classNameWith(style.ingress, className) }>
    {props.children}
  </blockquote>

export const Spacer = ({ align }: { align?: 'left' | 'right'}) => {
  const classes = classNames(style.spacer, 'spacer', { align_right: align === 'right', align_left: align === 'left' })

  return <p className={ classes } />
}

export function Separator () {
  return <div className={ style.separator } />
}
