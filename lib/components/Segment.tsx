import { ComponentType, PropsWithChildren, ReactNode } from 'react'

import styles from './Segment.module.css'
import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import { ScreenSize, SCREEN_SIZES } from '@/theme/ScreenSize'


function SegmentColumn ({ children, width = 1, padding = false, minWidth = ScreenSize.nil }: SegmentColumnPropsType) {
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


export default function Segment ({ children, variant, title }: SegmentPropsType) {
  const classes = classNames(styles.segment, styles[`segment-${variant}`])

  return <WithNavigationItem text={title}>
    <section className={classes}>
      {children(SegmentColumn)}
    </section>
  </WithNavigationItem>
}


type SegmentPropsType = {
  // eslint-disable-next-line no-unused-vars
  children: (Column: ComponentType<SegmentColumnPropsType>) => ReactNode,
  variant?: 'light' | 'dark',
  title:    string,
}


type SegmentColumnPropsType = PropsWithChildren<{
  width:      number,
  padding?:    boolean | undefined,
  minWidth?:   ScreenSize | undefined,
}>
