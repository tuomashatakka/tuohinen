import { PropsWithChildren } from 'react'

type TagProps = PropsWithChildren<unknown>


const Tag = ({ children }: TagProps) =>
  <span className='tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
    #{children}
  </span>

export default Tag
