'use client'
import { createContext, ReactElement, useContext, useEffect, useReducer, PropsWithChildren, ReactNode, MouseEventHandler } from 'react'

import ImageComponent from './Img'
import { StaticImageData } from 'next/image'
import { Paragraph } from './Type'

enum LightboxActionType {
  addItem,
  removeItem,
  setActiveItem,
  setActiveItemByIndex,
}

type LightboxItemType = {
  id: string,
  content: ReactNode,
  description: string,
  active: boolean,
}

type LightboxItemProps = PropsWithChildren<{
  id: string,
  description: string,
}>

type LightboxImageItemProps = {
  description: string,
  image: StaticImageData,
}

type LightboxAddItemActionPayloadType = {
  id: string,
  content: ReactNode,
  description: string,
}

type LightboxRemoveItemActionPayloadType = {
  id: string,
}

type LightboxSetActiveItemActionPayloadType = {
  id: string | null
}

type LightboxSetActiveItemByIndexActionPayloadType = {
  id: number
}

type LightboxActionPayloadType =
  LightboxAddItemActionPayloadType |
  LightboxRemoveItemActionPayloadType |
  LightboxSetActiveItemActionPayloadType |
  LightboxSetActiveItemByIndexActionPayloadType

type LightboxAction = {
  type: LightboxActionType
  payload: LightboxActionPayloadType
}

type Dispatch = (action: LightboxAction) => void

const initialLightboxItems: LightboxItemType[]  = []
const LightboxContext                       = createContext<LightboxItemType[]>(initialLightboxItems)
const LightboxDispatchContext               = createContext<Dispatch | null>(null)

export function useActiveLightboxItem (): [ LightboxItemType | null, number ] {
  const context = useContext(LightboxContext)

  if (!context)
    throw new Error('No NavigationPagesContext value found!')

  const index   = context.findIndex(item => item.active)
  if (index === -1)
    return [ null, -1 ]

  return [ context[index], index ]
}

export function useLightboxDispatch () {
  const dispatch = useContext(LightboxDispatchContext)

  const dispatchAction = (type: LightboxActionType, payload: LightboxActionPayloadType) =>
    dispatch && dispatch({ type, payload })

  const addItem = (id: string, content: ReactNode, description: string) => {
    dispatchAction(LightboxActionType.addItem, { id, content, description })
  }

  const removeItem = (id: string) => {
    dispatchAction(LightboxActionType.removeItem, { id })
  }

  const setActiveItem = (id: string | null = null) => {
    dispatchAction(LightboxActionType.setActiveItem, { id })
  }

  const setActiveItemByIndex = (id: number) => {
    dispatchAction(LightboxActionType.setActiveItemByIndex, { id })
  }

  return { addItem, removeItem, setActiveItem, setActiveItemByIndex }
}

export default function LightboxItem ({ id, description, children }: PropsWithChildren<LightboxItemProps>) {
  const { addItem, removeItem, setActiveItem } = useLightboxDispatch()

  const style = {
    display:  'contents',
    cursor:   'pointer',
  }

  useEffect(() => {
    addItem(id, children, description)

    return () => {
      removeItem(id)
    }
  }, [ description, id, addItem, removeItem, children ])

  return <div key={ id } onClick={ () => setActiveItem(id) } style={ style }>
    { children }
  </div>
}


export function LightboxImageItem ({ description, image }: LightboxImageItemProps) {
  return <LightboxItem id={ description } description={ description }>
    <ImageComponent image={ image } alt={ description } />
  </LightboxItem>
}


const Dialog = ({ open, children, onClick }: { open: boolean, onClick: MouseEventHandler, children: () => ReactElement }) =>
  <dialog
    aria-modal={ true }
    open={ open }
    onClick={ onClick }>
    <div className='dialog-content-wrapper'>
      { open && children() }
    </div>
  </dialog>

const LightboxModal = () => {
  const [ item, index ]  = useActiveLightboxItem() as [ LightboxItemType, number ]
  const { setActiveItem, setActiveItemByIndex } = useLightboxDispatch()

  const onSelectNext: MouseEventHandler = (e) => {
    setActiveItemByIndex(index + 1)
    e.stopPropagation()
  }

  const onSelectPrevious: MouseEventHandler = (e) => {
    setActiveItemByIndex(index - 1)
    e.stopPropagation()
  }

  return <Dialog
    open={ item !== null }
    onClick={() => setActiveItem(null) }>
    {() => <>
      <div className='content'>
        { item.content }
      </div>
      <aside className='info'>
        <Paragraph>{ item.description }</Paragraph>
        <div className='controls'>
          <button className='previous' onClick={ onSelectPrevious }>Edellinen</button>
          <button className='next' onClick={ onSelectNext }>Seuraava</button>
        </div>
      </aside>
    </>}
  </Dialog>
}


export const Lightbox = ({ children }: PropsWithChildren<object>) =>
  <LightboxProvider>
    { children }
    <LightboxModal />
  </LightboxProvider>


function LightboxProvider ({ children }: PropsWithChildren<object>) {
  const [ pages, dispatch ] = useReducer(
    lightboxReducer,
    initialLightboxItems
  )

  return <LightboxContext.Provider value={pages}>
    <LightboxDispatchContext.Provider value={dispatch}>
      {children}
    </LightboxDispatchContext.Provider>
  </LightboxContext.Provider>
}

type LightboxReducerType = (items: LightboxItemType[], action: LightboxAction) => LightboxItemType[]

// @ts-expect-error FIXME
const lightboxReducer: LightboxReducerType = (items, action) => {
  switch (action.type) {

  case LightboxActionType.addItem:
    return [ ...items, { ...action.payload, active: false }]

  case LightboxActionType.removeItem:
    return items.filter((t) => t.id !== action.payload.id)

  case LightboxActionType.setActiveItem:
    return items.map((t) =>
      Object.assign(t, { active: t.id === action.payload.id }))

  case LightboxActionType.setActiveItemByIndex: {
    const index = (Number(action.payload.id) + items.length) % items.length

    return items.map((t, n) =>
      Object.assign(t, { active: n === index }))
  }

  default:
    throw Error('Unknown action: ' + action.type)
  }
}
