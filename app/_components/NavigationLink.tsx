'use client'

import { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './Navigation.module.css'
import { NavigationPage } from './NavigationContext'

export default function NavigationLink ( { hash, href, children, offset, active }: PropsWithChildren<NavigationPage> ) {
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
