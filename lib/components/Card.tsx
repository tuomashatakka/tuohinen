'use client'

import Image, { StaticImageData } from 'next/image'
import { PropsWithChildren } from 'react'
import Tag from './Tag'
import { Subheading } from './Type'


// const useInViewport = (ref: React.RefObject<HTMLElement>) => {

//   const callback = (e) => {
//     console.log(e)
//   }

//   document.addEventListener()

//   const rect = ref.current?.getBoundingClientRect()

//   console.log(rect)
// }



export default function Card ({ children, title, image }: CardProps ) {
  return <div className='card rounded overflow-hidden shadow-lg'>
    <Image width={640} height={120} className='object-cover w-full' src={image} alt='Tits or gtfo' />
    <div className='px-6 py-4 text-center'>
      <Subheading>{title}</Subheading>
      {children}
    </div>
    <div className='px-6 pt-4 pb-2 align-middle'>
      <Tag>hinta: 1 000e</Tag>
    </div>
  </div>
}

type CardProps = PropsWithChildren<{ title: string, image: StaticImageData }>
