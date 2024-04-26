'use client'

import classNames from 'classnames'
import { MouseEventHandler, useEffect, useState } from 'react'

import Image from '@/lib/components/Img'
import NavigationLink, { StaticNavigationLink  } from './NavigationLink'
import { usePages } from './NavigationContext'
import metadata from '@/lib/metadata'
import { usePathname } from 'next/navigation'
import { classNameWithFont } from '@/theme/fonts'

import logoImage from '@/public/logo-white.png'


const classNamesWithMontserrat = classNameWithFont('montserrat')

const DynamicNavigationLinks = () => {
  const pages = usePages()
  const pathname  = usePathname()

  return pages?.map(page => {
    const active    = pathname === page.url || page.hash === window.location.hash
    const url       = `/${ page.href }`
    const hash      = `#${ page.href }`

    return <NavigationLink
      id={ page.href }
      active={ active || page.active }
      url={ url }
      hash={ hash }
      key={ page.href }
      href={ page.href }
      text={ page.text }
      offset={ page.offset }>
      {page.text}
    </NavigationLink>
  })
}

const NavigationMenuButton = ({ onClick }: { onClick: MouseEventHandler }) =>
  <div className='menuToggleWrapper'>
    <button
      className='menuToggle'
      onClick={ onClick }>
      ⁝
    </button>
    <h1 className='navigation_h1'>{ metadata.title }</h1>
  </div>

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
    <NavigationMenuButton onClick={ handleClick } />
    <ul className={ classNamesWithMontserrat('list') }>
      <StaticNavigationLink id='etusivu' url='/'>Etusivu</StaticNavigationLink>
      <StaticNavigationLink id='tuote' url='/tuotteesta'>Tuote</StaticNavigationLink>
      <StaticNavigationLink id='taiteilija' url='/taiteilijasta'>Taiteilija</StaticNavigationLink>
      <StaticNavigationLink id='galleria' url='/galleria'>Galleria</StaticNavigationLink>
      <StaticNavigationLink id='contact' url='/contact'>Ota yhteyttä</StaticNavigationLink>
      <DynamicNavigationLinks />
      {/* <NavigationLink href='contact'>Ota yhteyttä</NavigationLink> */}
    </ul>

  </nav>
}
