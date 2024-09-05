import { ComponentType, PropsWithChildren, ReactNode } from 'react'

import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import { ScreenSize, SCREEN_SIZES } from '@/theme/ScreenSize'

let index = 0

const getNextRunningIndex = () =>
  String(++index)


function SegmentColumn ({
  children,
  className, 
  width = 1,
  align = 'right',
  padding = false,
  minWidth = ScreenSize.nil
}: SegmentColumnPropsType) {

  const classes = classNames(
    'segment-column',
    `column-${width}`,
    `align-${align}`,
    className,
    {
      padding,
      [`min-width-${SCREEN_SIZES[minWidth]}`]: minWidth,
    },
  )

  return <div className={ classes }>
    { children }
  </div>
}

function SegmentBreak ({ padding }: SegmentBreakPropsType) {
  const classes = classNames(
    'segment-break',
    { padding },
  )

  return <hr className={ classes } />
}

export default function Segment ({ className, children, variant, title, padding }: SegmentPropsType) {

  const classes = classNames('segment', className, {
    [`segment-${variant}`]: !!variant,
    padding,
  })

  return <WithNavigationItem text={ title || getNextRunningIndex() }>
    <section className={ classes }>
      {children(SegmentColumn, SegmentBreak)}
    </section>
  </WithNavigationItem>
}

export enum SegmentVariantType {
  dark = 'dark',
  light = 'light',
}

type SegmentPropsType = {
  // eslint-disable-next-line no-unused-vars
  children:   (Column: ComponentType<SegmentColumnPropsType>, Break: ComponentType<SegmentBreakPropsType>) => ReactNode,
  className?: string,
  variant?:   SegmentVariantType,
  padding?:   boolean | undefined,
  title?:     string,
}

type SegmentBreakPropsType = {
  padding?: boolean,
}

type SegmentColumnPropsType = PropsWithChildren<{
  width?:       number,
  align?:       string,
  padding?:     boolean | undefined,
  minWidth?:    ScreenSize | undefined,
  className?:   string,
}>
