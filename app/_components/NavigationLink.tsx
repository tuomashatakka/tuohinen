'use client'

import { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './Navigation.module.css'

export default function NavigationLink ( { href, children, offset }: PropsWithChildren<{ href: string, offset?: number } > ) {
  const pathname = usePathname()
  const url = `/${ href }`
  const active = pathname === url
  const className = classNames( styles.list_item, { [ styles.list_item_active ]: active } )

  if (typeof offset === 'number') {
    const handleClick = () => {
      window.scrollTo(0, offset)
    }

    return <li className={className}>
      <span className={styles.list_item_link} onClick={ handleClick }>{ children }</span>
    </li>
  }

  return <li className={className}>
    <Link className={styles.list_item_link} href={url}>
      {children}
    </Link>
  </li>
}
