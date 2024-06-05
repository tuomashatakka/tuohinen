'use client'

import { PropsWithChildren } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import { NavigationPage } from './NavigationContext'


export default function NavigationLink ( { hash, href, children, active }: PropsWithChildren<NavigationPage> ) {
  const className = classNames( 'list_item', { list_item_active: active } )

  return <li className={ className } key={ href }>
    <a

      // onClick={ handleClick }
      className={ 'list_item_link' }
      href={ hash }>
      { children }
    </a>
  </li>
}

export function StaticNavigationLink ({ id, url, children }: PropsWithChildren<{ id: string, url: string }>) {
  const pathname  = usePathname()
  const active    = pathname === url
  const className = classNames('list_item', { list_item_active: active })

  return <li className={ className } key={ id }>
    <Link className={ 'list_item_link' } href={ url }>
      {children}
    </Link>
  </li>
}
