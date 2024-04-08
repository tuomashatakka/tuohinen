import { ComponentType, createRef, MutableRefObject, PropsWithChildren, ReactNode, Ref, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import { ScreenSize, SCREEN_SIZES } from '@/theme/ScreenSize'


function SegmentColumn ({ children, width = 1, padding = false, minWidth = ScreenSize.nil }: SegmentColumnPropsType) {
  const classes = classNames(
    'segment-column',
    `column-${width}`,
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

  const [ visible, ref ] = useWithinViewport()

  const classes = classNames('segment', {
    [`segment-${variant}`]: !!variant,
    visible,
  })

  return <WithNavigationItem text={title}>
    {/* @ts-ignore */}
    <section className={classes} ref={ ref }>
      {children(SegmentColumn)}
    </section>
  </WithNavigationItem>
}
interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

export function useWithinViewport (onShow?: IntersectionObserverCallback): [ boolean, MutableRefObject<HTMLElement | undefined> ] {
  const ref = useRef<HTMLElement>()
  const [ visible, setVisibilityState ] = useState(false)

  useEffect(() => {
    const options = {
      root:       null,
      threshold:  0,
      rootMargin: '0px',
    }

    const handleIntersectionObservation: IntersectionObserverCallback = (entries, observer) => {
      if (onShow)
        onShow(entries, observer)
      entries.forEach(entry => setVisibilityState(entry.isIntersecting))
    }

    if (ref.current) {
      const observer = new IntersectionObserver(handleIntersectionObservation, options)
      observer.observe(ref.current.parentElement as HTMLElement)

      return () => observer.disconnect()
    }
  }, [ onShow, ref ])

  return [ visible, ref ]
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
