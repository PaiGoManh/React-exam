import React from 'react'
import {Link } from 'react-router-dom'
import Logout from './Logout'


const Navbar = () => {
  return (
    <>

    <nav className='bg-gray-900 text-white shadow-lg' >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
        <div className='flex items-center justify-between h-[50px]'>
          <div className='flex items-center'>
            <Link to='/home'>
              HomePage
            </Link>
          </div>
          <div className='flex gap-[5%]'>
            <Link to='/addappointment' className=''>
              <h1>AddAppointments</h1>
            </Link>
            <Link to='/appointments'>
              <h1>MyAppointments</h1>
            </Link>
            <Link to='/logout'>
              <Logout/>
            </Link>

          </div>
        </div>
      </div>
    </nav>
    </>

  )
}

export default Navbar