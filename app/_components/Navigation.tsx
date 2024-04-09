'use client'

import classNames from 'classnames'
import { createContext, MouseEventHandler, PointerEventHandler, PropsWithChildren, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import NavigationLink from './NavigationLink'
import { usePages } from './NavigationContext'
import metadata from '@/lib/metadata'
import { usePathname } from 'next/navigation'


const DynamicNavigationLinks = () => {
  const pages = usePages()
  const pathname  = usePathname()

  return pages?.map(page => {
    const active    = pathname === page.url || page.hash === window.location.hash
    const url       = `/${ page.href }`
    const hash      = `#${ page.href }`

    return <NavigationLink
      id={ page.href }
      active={active || page.active}
      url={url}
      hash={hash}
      key={page.href}
      href={page.href}
      text={ page.text }
      offset={page.offset}>
      {page.text}
    </NavigationLink>
  })
}

const NavigationMenuButton = ({ onClick }: { onClick: MouseEventHandler }) =>
  <div className={ 'menuToggleWrapper' }>
    <button
      className={ 'menuToggle' }
      onClick={ onClick }>
      ⁝
    </button>
    <h1 className={ 'navigation_h1' }>{ metadata.title }</h1>
  </div>

export default function Navigation () {
  const [ menuOpen, toggleMenu ] = useState(false)
  const className = classNames('navigation', { menuOpen })

  const handleClick = () => toggleMenu(!menuOpen)
  const closeMenu = () => toggleMenu(false)

  useEffect(() => {
    if (menuOpen)
      return document.addEventListener('click', closeMenu, { once: true, passive: true })
  }, [ menuOpen ])

  return <nav className={ className }>
    <NavigationMenuButton onClick={ handleClick } />
    <ul className={'list'}>
      <DynamicNavigationLinks />
      {/* <NavigationLink href=''>Etusivu</NavigationLink> */}
      {/* <NavigationLink href='contact'>Ota yhteyttä</NavigationLink> */}
    </ul>

  </nav>
}
