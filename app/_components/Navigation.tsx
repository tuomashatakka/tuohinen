'use client'

import classNames from 'classnames'
import { createContext, MouseEventHandler, PointerEventHandler, PropsWithChildren, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import styles from './Navigation.module.css'
import NavigationLink from './NavigationLink'
import { usePages } from './NavigationContext'
import metadata from '@/lib/metadata'

const DynamicNavigationLinks = () => {
  const pages = usePages()

  return pages?.map(page => <NavigationLink
    key={page.href}
    href={page.href}
    offset={page.offset}>
    {page.text}
  </NavigationLink>)
}

const NavigationMenuButton = ({ onClick }: { onClick: MouseEventHandler }) =>
  <div className={ styles.menuToggleWrapper }>
    <button
      className={ styles.menuToggle }
      onClick={ onClick }>
      ⁝
    </button>
    <h1 className={ styles.navigation_h1 }>{ metadata.title }</h1>
  </div>

export default function Navigation () {
  const [ menuOpen, toggleMenu ] = useState(false)
  const className = classNames(styles.navigation, { [styles.menuOpen]: menuOpen })

  const handleClick = () => toggleMenu(!menuOpen)
  const closeMenu = () => toggleMenu(false)

  useEffect(() => {
    if (menuOpen)
      return document.addEventListener('click', closeMenu, { once: true, passive: true })
  }, [ menuOpen ])

  return <nav className={ className }>
    <NavigationMenuButton onClick={ handleClick } />
    <ul className={styles.list}>
      <DynamicNavigationLinks />
      {/* <NavigationLink href=''>Etusivu</NavigationLink> */}
      {/* <NavigationLink href='contact'>Ota yhteyttä</NavigationLink> */}
    </ul>

  </nav>
}
