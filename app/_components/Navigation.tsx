'use client'

import classNames from 'classnames'
import { MouseEventHandler, useEffect, useState } from 'react'

import Image from '@/lib/components/Img'
import { StaticNavigationLink  } from './NavigationLink'
import metadata from '@/lib/metadata'
import { classNameWithFont } from '@/theme/fonts'

import logoImage from '@/public/logo-white.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const classNamesWithMontserrat = classNameWithFont('montserrat')

export type Page = {
  id: string,
  url: string,
  text: string,
}

// Create a dictionary of pages
export const pages: Record<string, Page> = {
  etusivu: { id: 'etusivu', url: '/', text: 'Etusivu' },
  valaisimet: { id: 'valaisimet', url: '/valaisimet', text: 'Valaisimet' },
  muotoilija: { id: 'muotoilija', url: '/muotoilija', text: 'Muotoilija' },
  tarina: { id: 'tarina', url: '/tarina', text: 'Tarina' },
  galleria: { id: 'galleria', url: '/galleria', text: 'Galleria' },
  yhteystiedot: { id: 'contact', url: '/yhteystiedot', text: 'Yhteystiedot' },
}

export function useActivePage () {
  const pathname = usePathname()
  const isPathname = (page: Page) => page.url === pathname

  return Object.values(pages).find(isPathname)
}

const NavigationMenuButton = ({ onClick }: { onClick: MouseEventHandler }) =>
  <button
    className='menuToggle'
    onClick={ onClick }>
    ☰
  </button>

export default function Navigation () {
  const [ menuOpen, toggleMenu ] = useState(false)
  const className   = classNames('navigation', { menuOpen })
  const handleClick = () => toggleMenu(!menuOpen)
  const closeMenu   = () => toggleMenu(false)

  useEffect(() => {
    if (menuOpen)
      return document.addEventListener('click', closeMenu, { once: true, passive: true })
  }, [ menuOpen ])

  return <nav className={ className }>
    <div className='logo-container' style={{ order: 10 }}>
      <Image image={ logoImage } alt='Tuohinen logo' className='logo' />
    </div>

    <div className='menuToggleWrapper'>
      <NavigationMenuButton onClick={ handleClick } />
      <h1 className='navigation_h1'>
        <Link className={ 'list_item_link' } href='/'>
          { metadata.title }
        </Link>
      </h1>
    </div>

    <ul className={ classNamesWithMontserrat('list') }>
      {Object.values(pages).map(page =>
        <StaticNavigationLink key={ page.id } id={ page.id } url={ page.url }>
          {page.text}
        </StaticNavigationLink>
      )}
    </ul>

  </nav>
}
