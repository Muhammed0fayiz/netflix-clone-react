import React from 'react'
import './Navbar.css'
import logo from '../../assets/logos.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { logout } from '../../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img className='logo-img' src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <p>Children</p>
       
        <FontAwesomeIcon icon={faBell} />
        <div className='profile-dropdown'>
          <FontAwesomeIcon icon={faCaretDown} className='profile' />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflex</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
