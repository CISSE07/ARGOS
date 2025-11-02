import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/argos_logos/argos.png'
import Navbar from '../ui/Navbar'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4  shadow-md"> 
        <Image src={logo} alt="Argos Logo" width={150} height={50} />
        <Navbar />
    </header>
  )
}

export default Header