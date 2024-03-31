'use client'

import { PropsWithChildren } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './Navigation.module.css'

export default function NavigationLink ( { href, children, offset }: PropsWithChildren<{ href: string, offset?: number } > ) {
  const pathname  = usePathname()
  const url       = `/${ href }`
  const hash      = `#${href}`
  const active    = pathname === url || hash === window.location.hash

  const className = classNames( styles.list_item, { [ styles.list_item_active ]: active } )

  if (typeof offset === 'number') {

    return <li className={className} key={href}>
      <a

        // onClick={ handleClick }
        className={styles.list_item_link}
        href={ hash }>
        { children }
      </a>
    </li>
  }

  return <li className={className} key={href}>
    <Link className={styles.list_item_link} href={url}>
      {children}
    </Link>
  </li>
}
