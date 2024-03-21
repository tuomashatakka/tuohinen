import { ComponentClass, ComponentType, FunctionComponentFactory, PropsWithChildren, ReactNode } from 'react'

import styles from './Segment.module.css'
import classNames from 'classnames'


function SegmentColumn ({ children, width, padding, minWidth }: SegmentColumnPropsType) {

  const classes = classNames(
    styles.segmentColumn,
    styles[`column-${width}`],
    minWidth && styles[`min-width-${SCREEN_SIZES[minWidth]}`],
    { [styles.padding]: padding },
  )

  return <div className={ classes }>
    { children }
  </div>
}


export default function Segment ({ children, variant }: SegmentPropsType) {
  const classes = classNames(
    styles.segment,
    styles[`segment-${variant}`]
  )

  return <section className={ classes } >
    {children(SegmentColumn)}
  </section>
}


export enum ScreenSize { nil, xs, sm, md, lg, xl }

export type ScreenSizeIdentifier = keyof typeof ScreenSize

export const SCREEN_SIZES: Array<ScreenSizeIdentifier> = [ 'nil', 'xs', 'sm', 'md', 'lg', 'xl' ]


SegmentColumn.defaultProps = {
  width:    1,
  padding:  false,
  minWidth: ScreenSize.nil
}

interface SegmentPropsType {
  children: (Column: ComponentType<SegmentColumnPropsType>) => ReactNode;
  variant?: 'light' | 'dark'
}

type SegmentColumnPropsType = PropsWithChildren<{
  width:      number,
  padding?:    boolean | undefined,
  minWidth?:   ScreenSize | undefined,
}>
