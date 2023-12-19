import React from 'react'
import { Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import { FiActivity } from 'react-icons/fi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const path = usePathname()
  console.log(path)

  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Register',
      path: '/register',
    },
  ]

  return (
    <Navbar>
      <NavbarBrand>
        <FiActivity />
        <p>FiActivity</p>
      </NavbarBrand>
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {/* <NavbarItem>{link.name}</NavbarItem> */}
          {link.path === path ? (
            <NavbarItem className='text-zinc-800'>{link.name}</NavbarItem>
          ) : (
            <NavbarItem className='text-zinc-500'>{link.name}</NavbarItem>
          )}
        </Link>
      ))}
    </Navbar>
  )
}

export default Nav
