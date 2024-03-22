'use client'

import classNames from 'classnames'
import { createContext, PropsWithChildren, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import styles from './Navigation.module.css'
import NavigationLink from './NavigationLink'
import { usePages } from './NavigationContext'

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
  const className = classNames(styles.navigation)

  return <nav className={className}>
    <ul className={styles.list}>
      <DynamicNavigationLinks />
      {/* <NavigationLink href=''>Etusivu</NavigationLink> */}
      {/* <NavigationLink href='contact'>Ota yhteyttä</NavigationLink> */}
    </ul>
  </nav>
}
