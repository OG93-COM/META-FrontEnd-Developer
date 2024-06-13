import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className='md:flex items-center md:justify-between mx-auto text-slate-900 p-3'>
        <div className='flex justify-between items-center mx-auto '>
            <Link to={"/"}><img src="assets/Logo.svg" alt='Logo' className='mx-2'/></Link>
            <img
            onClick={toggleMenu}
            src={!isOpen ? "assets/icon_hamburgermenu.svg" : "assets/icon_hamburgermenuClose.svg"}
            className='w-9 mx-2 cursor-pointer md:hidden block '/>

        </div>
        <div className='md:flex md:items-center w-1/2'>
            <ul
            className='md:flex md:items-center md:z-auto md:static absolute md:w-auto hidden bg-[#fff] py-4 gap-6'>
                <li><Link to={"/"}>Home</Link></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><Link to={"/booking"}>Reservation</Link></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
            {isOpen &&
                <ul
                className='md:hidden w-full bg-[#fff] py-4'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><Link to={"/booking"}>Reservation</Link></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            }
        </div>
    </nav>
  )
}

export default Nav