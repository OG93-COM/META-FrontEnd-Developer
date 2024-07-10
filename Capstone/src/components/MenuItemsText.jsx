import React from 'react'
import { Link } from 'react-router-dom'

const MenuItemsText = () => {
  return (
    <>
    <li className='hover:text-yellow-500 pb-1'><Link to={"/"}>Home</Link></li>
    <li className='hover:text-yellow-500 pb-1'><a href='#'>About</a></li>
    <li className='hover:text-yellow-500 pb-1'><a href='#'>Menu</a></li>
    <li className='hover:text-yellow-500 pb-1'><Link to={"/booking"}>Reservation</Link></li>
    <li className='hover:text-yellow-500 pb-1'><a href='#'>Order Online</a></li>
    <li className='hover:text-yellow-500'><a href='#'>Login</a></li>
    </>
  )
}

export default MenuItemsText