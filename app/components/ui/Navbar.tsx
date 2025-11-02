import React from 'react'
import { getHeaderItems } from '@/app/lib/getPages'

const Navbar = () => {
  return (
    <>
        <nav>
          <ul>
            {getHeaderItems().map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
    </>
  )
}

export default Navbar