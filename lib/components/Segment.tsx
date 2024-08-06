import { ComponentType, PropsWithChildren, ReactNode } from 'react'

import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import { ScreenSize, SCREEN_SIZES } from '@/theme/ScreenSize'

let index = 0

const getNextRunningIndex = () => 
  String(++index)


function SegmentColumn ({ 
  children, 
  width = 1, 
  align = 'right',
  padding = false, 
  minWidth = ScreenSize.nil 
}: SegmentColumnPropsType) {

  const classes = classNames(
    'segment-column',
    `column-${width}`,
    `align-${align}`,
    { 
      padding,
      [`min-width-${SCREEN_SIZES[minWidth]}`]: minWidth,
    },
  )

  return <div className={ classes }>
    { children }
  </div>
}

export default function Segment ({ children, variant, title }: SegmentPropsType) {

  const classes = classNames('segment', {
    [`segment-${variant}`]: !!variant
  })

  return <WithNavigationItem text={ title || getNextRunningIndex() }>
    <section className={ classes }>
      {children(SegmentColumn)}
    </section>
  </WithNavigationItem>
}

export enum SegmentVariantType {
  dark = 'dark',
  light = 'light',
}

type SegmentPropsType = {
  // eslint-disable-next-line no-unused-vars
  children: (Column: ComponentType<SegmentColumnPropsType>) => ReactNode,
  variant?: SegmentVariantType,
  title?:   string,
}

type SegmentColumnPropsType = PropsWithChildren<{
  width?:       number,
  align?:       string,
  padding?:     boolean | undefined,
  minWidth?:    ScreenSize | undefined,
}>
