'use client'

import { useWithinViewport } from '@/lib/components/Segment'
import classNames from 'classnames'
import { createContext, PropsWithChildren, ReactElement, RefObject, useContext, useEffect, useReducer, useRef, useState } from 'react'

// Define type for navigation action
type NavigationAction = {
  type: string;
  page: Partial<NavigationPage> | { statuses: Map<string, boolean> }
}

// Define type for dispatch function
type Dispatch = (action: NavigationAction) => void;

export const NavigationPagesContext = createContext<NavigationPage[]>([])

export const NavigationPagesDispatchContext = createContext<Dispatch | null>(null)


export type NavigationPage = {
  id: string,
  url: string,
  hash: string,
  href: string,
  text: string,
  offset: number,
  active: boolean,
  state?: boolean,
}

const initialPages: NavigationPage[] = []

export const toSlug = (text: string) =>
  text
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export function usePages (): NavigationPage[] {
  const context = useContext(NavigationPagesContext)

  if (!context)
    throw new Error('No NavigationPagesContext value found!')

  return context
}


export function useNavigation () {
  const dispatch = useContext(NavigationPagesDispatchContext) as Dispatch

  const addPage = (text: string, offset: number = 0, active = false) => {
    const href = toSlug(text)
    if (dispatch)
      dispatch({
        type: 'added',
        page: {
          href,
          text,
          offset,
          active,
        }
      })

    return href
  }

  const removePage = (text: string) => {
    const id = toSlug(text)
    if (dispatch)
      dispatch({
        type: 'deleted',
        page: { id },
      })
  }

  const updatePage = (id: string, text: string) => {
    const href = toSlug(text)
    if (dispatch)
      dispatch({
        type: 'changed',
        page: { id, href, text },
      })
  }

  const setActivePage = (id: string = '', state?: boolean) => {
    console.warn('Set active page', id) // eslint-disable-line no-console
    if (dispatch)
      dispatch({
        type: 'active',
        page: { id, state }
      })
  }

  const setActiveStatusesForPages = (statuses: Map<string, boolean>) => {
    if (dispatch)
      dispatch({
        type: 'actives',
        page: { statuses }
      })
  }

  return { addPage, removePage, updatePage, setActivePage, setActiveStatusesForPages }
}

export function WithNavigationItem ({ text, children }: { text: string, children: ReactElement<unknown> }) {
  const { addPage, removePage, setActiveStatusesForPages } = useNavigation()
  const slug = useRef<string>()

  const [ active, ref ] = useWithinViewport((entry) => {
    const mmap = new Map()
    mmap.set(slug.current, entry.isIntersecting)
    setActiveStatusesForPages(mmap)
  })

  // const [ rect, offset, active, ref ] = useRect()

  useEffect(() => {
    if (ref.current) {
      slug.current = addPage(text, /*offset*/0, active )
      ref.current.id = slug.current
    }

    return () => {
      removePage(text)
    }
  }, [ text ]) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   if (active)
  //     setActivePage(slug.current)

  // }, [ active, setActivePage ])

  // @ts-expect-error FIXME
  return <div ref={ ref } id={ slug.current } className={ classNames({ active }) }>
    { children }
  </div>
}


export function NavigationProvider ({ children }: PropsWithChildren<unknown>) {

  // @ts-expect-error TODO: define explicit types for actions
  const [ pages, dispatch ] = useReducer(
    pagesReducer,
    initialPages
  )

  return <NavigationPagesContext.Provider value={ pages }>
    <NavigationPagesDispatchContext.Provider value={ dispatch }>
      {children}
    </NavigationPagesDispatchContext.Provider>
  </NavigationPagesContext.Provider>
}

// eslint-disable-next-line complexity
function pagesReducer (pages: NavigationPage[], action: { type: 'added' | 'changed' | 'deleted' | 'active' | 'actives', page: Partial<NavigationPage> & { statuses?: Map<string, boolean>} }) {
  switch (action.type) {

  case 'added':
    return [ ...pages, {
      id:     action.page.href,
      href:   action.page.href,
      text:   action.page.text,
      offset: action.page.offset,
      active: false,
    }]

  case 'changed':
    return pages.map((t: NavigationPage) => {
      if (t.id === action.page.id)
        return { ...action.page }
      else
        return t
    })

  case 'deleted':
    return pages.filter((t) => t.id !== action.page.id)

  case 'active':
    return pages.map((t) => {
      if (t.id === action.page.id)
        return { ...t, active: typeof action.page.state === 'boolean' }

      return t
    })

  case 'actives': {
    const m = action.page.statuses as Map<string, boolean>

    return pages.map(page => {
      if (!m.has(page.id)) return page
      else return { ...page, active: m?.get(page.id) }
    })
  }

  default:
    throw Error('Unknown action: ' + action.type)
  }
}

export const useEffectInEvent = <K extends keyof WindowEventMap>( // eslint-disable-line
  event: K,
  set: () => void,
  useCapture?: boolean,
  deps = []
) => {
  useEffect(() => {
    if (set) {
      set()
      window.addEventListener(event, set, useCapture)

      return () => window.removeEventListener(event, set, useCapture)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export const useRect = <T extends HTMLElement | null>(): [
  DOMRect | null,
  number,
  boolean,
  RefObject<T>
] => {
  const ref = useRef<T>(null)
  const [ rect, setRect ] = useState<DOMRect | null>(null)
  const [ offset, setOffset ] = useState<number>(0)
  const [ active, setActive ] = useState<boolean>(false)

  const set = (): void => {
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = ref.current?.getBoundingClientRect() as DOMRect
    setRect(elemRect)
    setOffset(elemRect.top - bodyRect.top)

    const newActiveState = elemRect.top <= 0 && elemRect.bottom > 0
    setActive(newActiveState)
  }

  useEffectInEvent('resize', set)
  useEffectInEvent('scroll', set)

  return [ rect, offset, active, ref ]
}
