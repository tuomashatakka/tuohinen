import Image from 'next/image'
import { PropsWithChildren } from 'react'
import Tag from './Tag'


type CardProps = PropsWithChildren<{ title: string }>


export default function Card ({ children, title }: CardProps ) {
  return <div className='w-full rounded overflow-hidden shadow-lg bg-slate-50'>
    <Image width={640} height={480} className='object-cover w-full' src='/card-img.png' alt='Tits or gtfo' />
    <div className='px-6 py-4 text-center'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      {children}
    </div>
    <div className='px-6 pt-4 pb-2 align-middle'>
      <Tag>Love</Tag>
      <Tag>Liwe</Tag>
      <Tag>Lautght</Tag>
      <Tag>GoodVipesOnly</Tag>
      <Tag>GueenBish</Tag>
    </div>
  </div>
}
