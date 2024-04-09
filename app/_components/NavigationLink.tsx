'use client'

import { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import { NavigationPage } from './NavigationContext'

export default function NavigationLink ( { url, hash, href, children, offset, active }: PropsWithChildren<NavigationPage> ) {
  const className = classNames( 'list_item', { list_item_active: active } )

  if (typeof offset === 'number') {

    return <li className={className} key={href}>
      <a

        // onClick={ handleClick }
        className={'list_item_link'}
        href={ hash }>
        { children }
      </a>
    </li>
  }

  return <li className={className} key={href}>
    <Link className={'list_item_link'} href={url}>
      {children}
    </Link>
  </li>
}
