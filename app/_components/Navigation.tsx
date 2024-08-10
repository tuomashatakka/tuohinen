'use client'

import classNames from 'classnames'
import { MouseEventHandler, useEffect, useState } from 'react'

import Image from '@/lib/components/Img'
import { StaticNavigationLink  } from './NavigationLink'
import metadata from '@/lib/metadata'
import { classNameWithFont } from '@/theme/fonts'

import logoImage from '@/public/logo-white.png'
import Link from 'next/link'


const classNamesWithMontserrat = classNameWithFont('montserrat')

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
      <StaticNavigationLink id='tuote' url='/tuotteesta'>Tuote</StaticNavigationLink>
      <StaticNavigationLink id='muotoilija' url='/muotoilija'>Muotoilija</StaticNavigationLink>
      <StaticNavigationLink id='tarina' url='/tarina'>Tarina</StaticNavigationLink>
      <StaticNavigationLink id='galleria' url='/galleria'>Galleria</StaticNavigationLink>
      <StaticNavigationLink id='contact' url='/ota-yhteytta'>Ota yhteyttä</StaticNavigationLink>
    </ul>

  </nav>
}
