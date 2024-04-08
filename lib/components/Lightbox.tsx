'use client'
import { createContext, ReactElement, RefObject, useContext, useEffect, useReducer, useRef, useState, PropsWithChildren, ComponentClass, ReactNode, ReducerAction, createRef, MouseEventHandler } from 'react'

import ImageComponent from './Img'
import { StaticImageData } from 'next/image'
import { createPortal } from 'react-dom'
import { Paragraph } from './Type'

type LightboxComponentProps = {

  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  children: (Column: ComponentClass) => ReactNode,
}

const LightboxItemNode = (props: LightboxItemType) => {
  console.log(props) // eslint-disable-line

  return <ImageComponent
    key={ props.id }
    image={ props.image }
    alt={ props.description || '' } />
}

enum LightboxActionType {
  addItem,
  removeItem,
  setActiveItem,
}

type LightboxItemType<ID = string | null> = {
  id: ID,
  image: StaticImageData,
  description: string | null,
  active: boolean,
}

type LightboxItemProps = {
  id: string,
  image: StaticImageData,
  description?: string,
}

type LightboxAction = {
  type: LightboxActionType
  payload: Partial<LightboxItemType>
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

  const dispatchAction = (type: LightboxActionType, payload: Partial<LightboxItemType>) =>
    dispatch && dispatch({ type, payload })

  const addItem = (id: string, image: StaticImageData, description: string | null  = null) => {
    dispatchAction(LightboxActionType.addItem, { id, image, description })
  }

  const removeItem = (id: string) => {
    dispatchAction(LightboxActionType.removeItem, { id })
  }

  const setActiveItem = (id: string | null = null) => {
    dispatchAction(LightboxActionType.setActiveItem, { id })
  }

  return { addItem, removeItem, setActiveItem }
}

export default function LightboxItem ({ id, description, image, children }: PropsWithChildren<LightboxItemProps>) {
  const { addItem, removeItem, setActiveItem } = useLightboxDispatch()
  const slug = useRef<string>()

  useEffect(() => {
    addItem(id, image, description)

    return () => {
      removeItem(id)
    }
  }, [ description, image, id, addItem, removeItem ])

  // @ts-ignore
  return <div key={ id } onClick={ () => setActiveItem(id) }>
    <ImageComponent image={ image } alt={ description || ''} />
  </div>
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
  const ref   = createRef<typeof Dialog>()

  useEffect(() => {

  }, [ item ])

  return <Dialog open={ item !== null } onClick={() => setActiveItem(null) }>
    {() => <>
      <div>
        <ImageComponent image={ item.image } alt={ item.description || ''} />
      </div>
      <Paragraph>{ item.description }</Paragraph>
    </>}
  </Dialog>
}


export const Lightbox = ({ children }: PropsWithChildren<{}>) =>
  <LightboxProvider>
    { children }
    <LightboxModal />
  </LightboxProvider>


function LightboxProvider ({ children }: PropsWithChildren<{}>) {

  // @ts-ignore
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

function lightboxReducer (items: LightboxItemType[], action: LightboxAction) {
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
