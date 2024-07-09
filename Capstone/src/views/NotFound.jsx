import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

const NotFound = () => {
  return (
    <>
        <Nav/>
      <Header/>
      <p className='flex justify-center font-semibold text-green-900 pb-14'>Page Not Found, Please verify the link</p>
      <Footer/>
    </>
  )
}

export default NotFound