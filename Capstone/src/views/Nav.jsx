import React from 'react'


const Nav = () => {
  return (
    <nav className='flex items-center justify-center text-slate-900 p-3'>
        <div className='flex justify-center items-center w-1/2'>
            <img src="assets/Logo.svg" alt='Logo'/>
        </div>
        <div className='flex items-center w-1/2'>
            <ul className='flex items-center gap-6 '>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservation</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav