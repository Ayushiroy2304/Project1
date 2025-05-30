import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/chair3.jpg'

const Navbar = () => {
  return (
    <nav>
    <NavLink to='/'>
    <img src={logo} alt="Website Logo" className="logo" />
    </NavLink>

      <ul>
        <li>
        <NavLink to='/home'>Home</NavLink></li>
        <li>
        <NavLink to='/about'>About</NavLink></li>
        <li>
        <NavLink to='/services'>Service</NavLink></li>
        <li>
        <NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
