'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

const NavigationLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const pathname  = usePathname()
  const url       = `/${href}`
  const active    = pathname === url
  const className = classNames('link', { active })

  return <Link className={ className } href={ url }>
    { children }
  </Link >
}


export default function Navigation () {

  return (
    <nav>
      <ul>
        <li>
          <NavigationLink href=''>Etusivu</NavigationLink>
        </li>
        <li>
          <NavigationLink href='contact'>Ota yhteyttä</NavigationLink>
        </li>
      </ul>
    </nav>
  )
}
