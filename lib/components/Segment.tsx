import { ComponentClass, ComponentType, FunctionComponentFactory, PropsWithChildren, ReactNode, useEffect, useMemo, useRef } from 'react'

import styles from './Segment.module.css'
import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import { H3 } from '@/components/Type'
import { ScreenSize, SCREEN_SIZES } from '@/theme/ScreenSize'
import { LexicalEditor } from 'lexical'


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
  const renderChildren = () =>
    children(SegmentColumn)

  const editorRef = useRef<{
    onLoad:(editor: LexicalEditor) => void;
    onUpdate: (arg0: any, editor: LexicalEditor) => HTMLElement | null;
  }>()

  const classes = classNames(styles.segment, styles[`segment-${variant}`])

  return <WithNavigationItem text={title}>
    <section className={classes}>
      {children(SegmentColumn)}
    </section>
  </WithNavigationItem>

  const content = useMemo(renderChildren, [ children ])

  return <WithNavigationItem text={ title }>
    <section className={ classes }>
      { content }
    </section>
  </WithNavigationItem>
}


type SegmentPropsType = {
  children: (Column: ComponentType<SegmentColumnPropsType>) => ReactNode,
  variant?: 'light' | 'dark',
  title:    string,
}


type SegmentColumnPropsType = PropsWithChildren<{
  width:      number,
  padding?:    boolean | undefined,
  minWidth?:   ScreenSize | undefined,
}>
