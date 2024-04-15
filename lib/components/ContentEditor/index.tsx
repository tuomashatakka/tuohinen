// import { $getRoot, $getSelection } from 'lexical'
import { PropsWithChildren, useEffect, useState } from 'react'

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'

const theme = {
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
// @ts-expect-error TODO: error type
function onError (error) {
  // eslint-disable-next-line no-console
  console.error(error)
}

export default function Editor ({ active }: PropsWithChildren<{ active?: boolean }>) {
  const [ editable, setEditable ] = useState(false)

  useEffect(() => {
    if (active !== editable)
      setEditable(!!active)
  }, [ active, setEditable, editable ])

  const initialConfig = {
    namespace:  'editor',
    editable,
    theme,
    onError,
  }

  const handleClick = () => {
    setEditable(!editable)
  }

  return <div onClick={ handleClick }>
    <LexicalComposer initialConfig={ initialConfig }>
      <RichTextPlugin
        placeholder={ <span>Sisältö</span> }
        contentEditable={ <ContentEditable /> }
        ErrorBoundary={ LexicalErrorBoundary }
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  </div>
}
