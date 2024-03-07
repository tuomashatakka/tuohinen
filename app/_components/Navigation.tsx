'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

import styles from './Navigation.module.css'

const NavigationLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const pathname  = usePathname()
  const url       = `/${href}`
  const active    = pathname === url
  const className = classNames(styles.list_item, { [styles.list_item_active]: active  })

  return <li className={ className }>
    <Link className={ styles.list_item_link } href={ url }>
      { children }
    </Link >
  </li>
}


export default function Navigation () {
  const className = classNames(styles.navigation, 'main-navigation')
  return <nav className={ className }>
    <ul className={ styles.list }>
      <NavigationLink href=''>Etusivu</NavigationLink>
      <NavigationLink href='contact'>Ota yhteyttä</NavigationLink>
    </ul>
  </nav>
}
