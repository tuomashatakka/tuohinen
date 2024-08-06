'use client'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { IntersectionObserverCallback, observeIntersection } from './getObserver'


export default function useWithinViewport (onShow?: (entry: IntersectionObserverEntry) => void): [boolean, MutableRefObject<HTMLElement | undefined>] {
  const ref = useRef<HTMLElement>()
  const [ visible, setVisibilityState ] = useState(false)

  useEffect(() => {

    const handleIntersectionObservation: IntersectionObserverCallback = (entries, _observer) => {
      const index = entries.findIndex(entry => entry.target === ref.current)
      if (index === -1)
        return
      const entry = [ ...entries ][index]

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
