import type { Metadata as NextMetadata } from 'next'



export interface Metadata extends NextMetadata {
  title: string
}

const metadata: Metadata = {
  title:        'Tuohinen',
  description:  'Tuo luonto kotiisi',
}

export default metadata
