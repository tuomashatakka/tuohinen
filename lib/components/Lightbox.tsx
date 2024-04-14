'use client'
import { createContext, ReactElement, useContext, useEffect, useReducer, PropsWithChildren, ReactNode, MouseEventHandler } from 'react'

import ImageComponent from './Img'
import { StaticImageData } from 'next/image'
import { Paragraph } from './Type'

enum LightboxActionType {
  addItem,
  removeItem,
  setActiveItem,
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

type LightboxActionPayloadType =
  LightboxAddItemActionPayloadType |
  LightboxRemoveItemActionPayloadType |
  LightboxSetActiveItemActionPayloadType

type LightboxAction = {
  type: LightboxActionType
  payload: LightboxActionPayloadType
}

type Dispatch = (action: LightboxAction) => void

const initialLightboxItems: LightboxItemType[]  = []
const LightboxContext                       = createContext<LightboxItemType[]>(initialLightboxItems)
const LightboxDispatchContext               = createContext<Dispatch | null>(null)

export function useActiveLightboxItem (): LightboxItemType | null {
  const context = useContext(LightboxContext)

  if (!context)
    throw new Error('No NavigationPagesContext value found!')

  const index   = context.findIndex(item => item.active)
  if (index === -1)
    return null

  return context[index]
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

  return { addItem, removeItem, setActiveItem }
}

export default function LightboxItem ({ id, description, children }: PropsWithChildren<LightboxItemProps>) {
  const { addItem, removeItem, setActiveItem } = useLightboxDispatch()

  useEffect(() => {
    addItem(id, children, description)

    return () => {
      removeItem(id)
    }
  }, [ description, id, addItem, removeItem, children ])

  return <div key={ id } onClick={ () => setActiveItem(id) }>
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
    <div>
      { open && children() }
    </div>
  </dialog>

const LightboxModal = () => {
  const item  = useActiveLightboxItem() as LightboxItemProps
  const { setActiveItem } = useLightboxDispatch()

  return <Dialog open={ item !== null } onClick={() => setActiveItem(null) }>
    {() => <>
      <div>
        { item.children }
      </div>
      <Paragraph>{ item.description }</Paragraph>
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

  default:
    throw Error('Unknown action: ' + action.type)
  }
}
