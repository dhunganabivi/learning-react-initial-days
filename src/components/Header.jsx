import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex justify-between px-5 py-3'>
        <h2>Demo</h2>
        <nav className='space-x-6'>
            <NavLink className="hover:text-red-600 bg-orange-300"> contact</NavLink>
            <NavLink> About</NavLink>
        </nav>
    </div>
  )
}

export default Header