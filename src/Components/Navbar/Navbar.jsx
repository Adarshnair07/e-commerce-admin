import React from 'react'
import './Navbar.css'
import navprofileIcon from '../Assets/nav-profile.svg'
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navlog">
      <img src={logo} alt="logo" />
        <p>URBNkix</p>
        </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
