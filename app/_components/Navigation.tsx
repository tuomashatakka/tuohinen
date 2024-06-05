'use client'

import classNames from 'classnames'
import { MouseEventHandler, useEffect, useState } from 'react'

import Image from '@/lib/components/Img'
import { StaticNavigationLink  } from './NavigationLink'
import metadata from '@/lib/metadata'
import { classNameWithFont } from '@/theme/fonts'

import logoImage from '@/public/logo-white.png'


const classNamesWithMontserrat = classNameWithFont('montserrat')

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
    </ul>

  </nav>
}
