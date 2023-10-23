import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/address' >
            Address
          </NavLink>
      </nav>
    </div>
  )
}

export default Navbar