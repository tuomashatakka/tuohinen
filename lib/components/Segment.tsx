import { ComponentType, MutableRefObject, PropsWithChildren, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import { ScreenSize, SCREEN_SIZES } from '@/theme/ScreenSize'
import { IntersectionObserverCallback, observeIntersection } from './getObserver'

let index = 0

const getNextRunningIndex = () => 
  String(++index)


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

  const classes = classNames('segment', {
    [`segment-${variant}`]: !!variant
  })

  if (title)
    return <WithNavigationItem text={ title || getNextRunningIndex() }>
      <section className={ classes }>
        {children(SegmentColumn)}
      </section>
    </WithNavigationItem>

  return <section className={ classes }>
    {children(SegmentColumn)}
  </section>

}

export function useWithinViewport (onShow?: (entry: IntersectionObserverEntry) => void): [ boolean, MutableRefObject<HTMLElement | undefined> ] {
  const ref = useRef<HTMLElement>()
  const [ visible, setVisibilityState ] = useState(false)

  useEffect(() => {

    const handleIntersectionObservation: IntersectionObserverCallback = (entries, _observer) => {
      const index = entries.findIndex(entry => entry.target === ref.current)
      if (index === -1)
        return
      const entry  = [ ...entries ][index]

      if (!entry)
        return setVisibilityState(false)

      setVisibilityState(entry.isIntersecting)
      if (onShow && index > -1)
        return onShow(entry)
    }

    if (ref.current) {
      return observeIntersection(ref.current, handleIntersectionObservation).dispose
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ref ])


  return [ visible, ref ]
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
  width:      number,
  padding?:    boolean | undefined,
  minWidth?:   ScreenSize | undefined,
}>
