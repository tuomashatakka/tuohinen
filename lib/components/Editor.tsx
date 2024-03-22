/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { LexicalComposerContextType } from '@lexical/react/LexicalComposerContext'
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html'

import {
  createLexicalComposerContext,
  LexicalComposerContext,
} from '@lexical/react/LexicalComposerContext'
import {
  $createParagraphNode,
  $getRoot,
  $getSelection,
  $insertNodes,
  createEditor,
  EditorState,
  EditorThemeClasses,
  HTMLConfig,
  Klass,
  LexicalEditor,
  LexicalNode,
  LexicalNodeReplacement,
} from 'lexical'
import { useMemo } from 'react'
import * as React from 'react'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'

import ExampleTheme from './EditorTheme'
import ToolbarPlugin from './EditorPlugins/ToolbarPlugin'
import TreeViewPlugin from './EditorPlugins/TreeViewPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'



export const CAN_USE_DOM  = () =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'


const useLayoutEffectt = () =>  CAN_USE_DOM()
  ? React.useLayoutEffect
  : React.useEffect

const HISTORY_MERGE_OPTIONS = { tag: 'history-merge' }

export type InitialEditorStateType =
  | null
  | string
  | EditorState
  | ((editor: LexicalEditor) => void);

export type InitialConfigType = Readonly<{
  editor__DEPRECATED?: LexicalEditor | null;
  namespace: string;
  nodes?: ReadonlyArray<Klass<LexicalNode> | LexicalNodeReplacement>;
  onError: (error: Error, editor: LexicalEditor) => void;
  editable?: boolean;
  theme?: EditorThemeClasses;
  editorState?: InitialEditorStateType;
  html?: HTMLConfig;
}>;

type Props = React.PropsWithChildren<{
  initialConfig: InitialConfigType;
}>;

const initialEditor = null

export function LexicalComposer ({ initialConfig, children, onLoad }: Props & { onLoad?: ((state: LexicalEditor) => void) }) {
  const composerContext: [LexicalEditor, LexicalComposerContextType] = useMemo(
    () => {
      const {
        theme,
        namespace,
        editor__DEPRECATED: initialEditor,
        nodes,
        onError,
        editorState: initialEditorState,
        html,
      } = initialConfig

      const context: LexicalComposerContextType = createLexicalComposerContext(
        null,
        theme,
      )

      let editor = initialEditor || null

      if (editor === null) {
        const newEditor = createEditor({
          editable: initialConfig.editable,
          html,
          namespace,
          nodes,
          onError: (error) => onError(error, newEditor),
          theme,
        })

        initializeEditor(newEditor, initialEditorState)

        editor = newEditor
        onLoad && onLoad(editor)
      }

      return [ editor, context ]
    },

    // We only do this for init
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useLayoutEffectt()(() => {
    const isEditable = initialConfig.editable
    const [ editor ] = composerContext
    editor.setEditable(isEditable !== undefined ? isEditable : true)

    // We only do this for init
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  return (
    <LexicalComposerContext.Provider value={composerContext}>
      {children}
    </LexicalComposerContext.Provider>
  )
}


function initializeEditor (editor: LexicalEditor, initialEditorState?: InitialEditorStateType) {
  if (initialEditorState === null)
    return

  else if (initialEditorState === undefined)
    editor.update(handleUpdate.bind(editor), HISTORY_MERGE_OPTIONS)

  else if (initialEditorState !== null)
    reduceEditorState(editor, initialEditorState)
}

function handleUpdate (this: any) {
  const editor = this
  const root = $getRoot()

  if (root.isEmpty()) {
    const paragraph = $createParagraphNode()
    root.append(paragraph)
    const activeElement = CAN_USE_DOM() ? document.activeElement : null

    if (
      $getSelection() !== null ||
      activeElement !== null && activeElement === editor.getRootElement()
    ) {
      paragraph.select()
    }
  }
}


const reduceEditorState = (editor: LexicalEditor, initialEditorState: string | EditorState | ( ( editor: LexicalEditor ) => void )) => {

  switch (typeof initialEditorState) {
  case 'string': {
    const parsedEditorState = editor.parseEditorState(initialEditorState)
    editor.setEditorState(parsedEditorState, HISTORY_MERGE_OPTIONS)
    break
  }

  case 'object': {
    editor.setEditorState(initialEditorState, HISTORY_MERGE_OPTIONS)
    break
  }

  case 'function': {
    editor.update(() => {
      const root = $getRoot()

      if (root.isEmpty()) {
        initialEditorState(editor)
      }
    }, HISTORY_MERGE_OPTIONS)
    break
  }
  }


}

function Placeholder () {
  return <div className='editor-placeholder'>Enter some rich text...</div>
}

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [],

  // Handling of errors during update
  onError (error: Error) {
    throw error
  },

  // The editor theme
  theme: ExampleTheme,
}

export default function EditorComposer ({ onUpdate, onLoad }: { onLoad: ((editor: LexicalEditor) => void), onUpdate: any }) {
  return (
    <LexicalComposer
      initialConfig={editorConfig}
      onLoad={onLoad}>
      <div className='editor-container'>
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}/>
          <OnChangePlugin onChange={onUpdate} />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <TreeViewPlugin />
        </div>
      </div>
    </LexicalComposer>
  )
}

export const exportHTML = (editor: LexicalEditor, selection = null) =>
  $generateHtmlFromNodes(editor, selection)

export const importHTML = (editor: LexicalEditor, node: HTMLElement) => {
  if (!node)
    return
  const htmlString = node.innerHTML


  // In the browser you can use the native DOMParser API to parse the HTML string.
  const parser = new DOMParser()
  const dom = parser.parseFromString(htmlString, 'text/html')

  const nodes = $generateNodesFromDOM(editor, dom)

  $insertNodes(nodes)
}
