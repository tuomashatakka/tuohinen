'use client'

import classNames from 'classnames'
import { createContext, PropsWithChildren, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import styles from './Navigation.module.css'
import NavigationLink from './NavigationLink'
import { usePages } from './NavigationContext'
import metadata from '@/lib/metadata'

const DynamicNavigationLinks = () => {
  const pages = usePages()

  return <>
    {pages?.map(page => <NavigationLink
      key={page.href}
      href={page.href}
      offset={page.offset}>
      {page.text}
    </NavigationLink>)}
  </>
}

export default function Navigation () {
  const [ menuOpen, toggleMenu ] = useState(false)
  const className = classNames(styles.navigation, { [styles.menuOpen]: menuOpen })

  const handleClick = () => toggleMenu(!menuOpen)
  const closeMenu = () => toggleMenu(false)

  useEffect(() => {
    if (menuOpen)
      document.addEventListener('click', closeMenu, { once: true, passive: true })
  }, [ menuOpen ])

  return <nav className={ className }>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button
        className={ styles.menuToggle }
        onClick={ handleClick }>
        ⁝
      </button>
      <h1>{ metadata.title }</h1>
    </div>

    <ul className={styles.list}>
      <DynamicNavigationLinks />
      {/* <NavigationLink href=''>Etusivu</NavigationLink> */}
      {/* <NavigationLink href='contact'>Ota yhteyttä</NavigationLink> */}
    </ul>

  </nav>
}
