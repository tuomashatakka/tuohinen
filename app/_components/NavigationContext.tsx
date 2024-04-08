'use client'

import { useWithinViewport } from '@/lib/components/Segment'
import { createContext, PropsWithChildren, ReactElement, RefObject, useContext, useEffect, useReducer, useRef, useState } from 'react'

// Define type for navigation action
type NavigationAction = {
  type: string;
  page: Partial<NavigationPage>
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
    dispatch({
      type: 'deleted',
      page: { id },
    })
  }

  const updatePage = (id: string, text: string) => {
    const href = toSlug(text)
    dispatch({
      type: 'changed',
      page: { id, href, text },
    })
  }

  const setActivePage = (id: string = '') => {
    console.warn("Set active page", id)
    dispatch({
      type: 'active',
      page: { id }
    })
  }

  return { addPage, removePage, updatePage, setActivePage }
}

export function WithNavigationItem ({ text, children }: { text: string, children: ReactElement<any> }) {
  const { addPage, removePage, setActivePage } = useNavigation()

  const [ active, ref ] = useWithinViewport((e) => {
    if (e.isIntersecting){
      console.log(e)
      setActivePage(slug.current)
    }
  })

  // const [ rect, offset, active, ref ] = useRect()
  const slug = useRef<string>()

  useEffect(() => {
    slug.current = addPage(text, /*offset*/0, active )

    return () => {
      removePage(text)
    }
  }, [ text, ref ]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (active)
      setActivePage(slug.current)

  }, [ active, setActivePage ])

  // @ts-ignore
  return <div ref={ ref } id={ slug.current }>
    { children }
  </div>
}


export function NavigationProvider ({ children }: PropsWithChildren<{}>) {

  // @ts-ignore
  const [ pages, dispatch ] = useReducer(
    pagesReducer,
    initialPages
  )

  return <NavigationPagesContext.Provider value={pages}>
    {/* @ts-ignore */}
    <NavigationPagesDispatchContext.Provider value={dispatch}>
      {children}
    </NavigationPagesDispatchContext.Provider>
  </NavigationPagesContext.Provider>
}

function pagesReducer (pages: NavigationPage[], action: { type: 'added' | 'changed' | 'deleted' | 'active', page: Partial<NavigationPage> }) {
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

  default:
    throw Error('Unknown action: ' + action.type)
  }
}

type MutableRefObject<T> = {
  current: T;
};

// @ts-ignore
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
    const offset   = elemRect.top - bodyRect.top
    setRect(elemRect)
    setOffset(elemRect.top - bodyRect.top)

    const newActiveState = elemRect.top <= 0 && elemRect.bottom > 0
    setActive(newActiveState)
  }

  useEffectInEvent('resize', set)
  useEffectInEvent('scroll', set)

  return [ rect, offset, active, ref ]
}
