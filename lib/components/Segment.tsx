
import { ComponentClass, ComponentType, FunctionComponentFactory, PropsWithChildren, ReactNode, useEffect, useRef } from 'react'

import styles from './Segment.module.css'
import classNames from 'classnames'
import { WithNavigationItem } from '@/app/_components/NavigationContext'
import EditorComposer, { exportHTML, importHTML } from './Editor'
import { LexicalEditor } from 'lexical'


function SegmentColumn ({ children, width, padding, minWidth }: SegmentColumnPropsType) {

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


export default function Segment ({
  children,
  variant,
  title,
}: SegmentPropsType) {
  const ref = useRef<HTMLElement>(null)

  const editorRef = useRef<{
    onLoad:(editor: LexicalEditor) => void;
    onUpdate: (arg0: any, editor: LexicalEditor) => HTMLElement | null;
  }>()

  const classes = classNames(styles.segment, styles[`segment-${variant}`])

  useEffect(() => {
    if (ref.current) {
      const x = ref.current.innerHTML
      console.log(x, ref.current)
    }
  }, [ editorRef, ref ])

  const handleLoad = (editor: LexicalEditor) => {
    console.log(ref.current, '.-.-,lölkj')

    // importHTML(editor, ref.current as HTMLElement)
  }

  return (
    <WithNavigationItem text={title}>
      <section ref={ref} className={classes}>
        {children(SegmentColumn)}
        <EditorComposer
          onLoad={handleLoad}
          onUpdate={(_: any, editor: LexicalEditor) => {
            const html = exportHTML(editor)

            if (ref.current) {
              ref.current.innerHTML = html
            }

            return ref.current
          }}/>
      </section>
    </WithNavigationItem>
  )
}




export enum ScreenSize { nil, xs, sm, md, lg, xl }

export type ScreenSizeIdentifier = keyof typeof ScreenSize

export const SCREEN_SIZES: Array<ScreenSizeIdentifier> = [ 'nil', 'xs', 'sm', 'md', 'lg', 'xl' ]


SegmentColumn.defaultProps = {
  width:    1,
  padding:  false,
  minWidth: ScreenSize.nil
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
