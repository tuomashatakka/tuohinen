'use client'

import { cloneElement, createContext, forwardRef, PropsWithChildren, ReactElement, Ref, useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'

// Define type for navigation action
type NavigationAction = {
  type: string;
  page: Partial<NavigationPage>
}

// Define type for dispatch function
type Dispatch = (action: NavigationAction) => void;

export const NavigationPagesContext = createContext([])

export const NavigationPagesDispatchContext = createContext<Dispatch | null>(null)


type NavigationPage = {
  id: string,
  href: string,
  text: string,
  offset: number,
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
  const dispatch = useContext(NavigationPagesDispatchContext)

  const addPage = (text: string, offset: number = 0) => {
    const href = toSlug(text)

    if (dispatch)
      dispatch({
        type: 'added',
        page: {
          href,
          text,
          offset,
        }
      })
  }

  const removePage = (text: string) => {
    const id = toSlug(text)

    // @ts-ignore
    dispatch({
      type: 'deleted',
      page: { id },
    })
  }


  const updatePage = (id: string, text: string) => {
    const href = toSlug(text)

    // @ts-ignore
    dispatch({
      type: 'changed',
      page: { id, href, text },
    })
  }

  return { addPage, removePage, updatePage }
}

export function WithNavigationItem ({ text, children }: { text: string, children: ReactElement<any> }) {
  const { addPage, removePage } = useNavigation()
  const [ rect, offset, ref ] = useRect()

  useEffect(() => {
    addPage(text, offset)

    return () => {
      removePage(text)
    }
  }, [ text, ref.current ]) // eslint-disable-line

  // @ts-ignore
  return <div ref={ ref }>
    { children }
  </div>
}

export const WithNavigationItemForwardRef = forwardRef(WithNavigationItem)


export function NavigationProvider ({ children }: PropsWithChildren<{}>) {

  // @ts-ignore
  const [ pages, dispatch ] = useReducer(
    pagesReducer,
    initialPages
  )

  return (
    <NavigationPagesContext.Provider value={pages}>
      {/* @ts-ignore */}
      <NavigationPagesDispatchContext.Provider value={dispatch}>
        {children}
      </NavigationPagesDispatchContext.Provider>
    </NavigationPagesContext.Provider>
  )
}

function pagesReducer (pages: NavigationPage[], action: { type: 'added' | 'changed' | 'deleted', page: Partial<NavigationPage> }) {
  switch (action.type) {

  case 'added':
    return [ ...pages, {
      id:     action.page.href,
      href:   action.page.href,
      text:   action.page.text,
      offset: action.page.offset,
    }]

  case 'changed':
    return pages.map((t: NavigationPage) => {
      if (t.id === action.page.id)
        return action.page
      else
        return t
    })

  case 'deleted':
    return pages.filter((t: NavigationPage) => t.id !== action.page.id)

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
) => {
  useEffect(() => {
    if (set) {
      set()
      window.addEventListener(event, set, useCapture)

      return () => window.removeEventListener(event, set, useCapture)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const useRect = <T extends HTMLElement | null>(): [
  DOMRect | undefined,
  number,
  MutableRefObject<T | null>,
] => {
  const ref = useRef<T>(null)
  const [ rect, setRect ] = useState<DOMRect>()
  const [ offset, setOffset ] = useState<number>(0)

  const set = (): void => {
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = ref.current?.getBoundingClientRect() as DOMRect
    const offset   = elemRect.top - bodyRect.top
    setRect(elemRect)
    setOffset(elemRect.top - bodyRect.top)
  }

  useEffectInEvent('resize', set)
  useEffectInEvent('scroll', set, true)

  return [ rect, offset, ref ]
}
