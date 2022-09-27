import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiClosedLin} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarlinks'>
        <div className='navbarlinksLogo'>
          <h1>WARMWEB</h1>
        </div>
        <div className='navbarlinkscontainer'>
          <p><a href='#Home'>Home</a></p>
          <p><a href='#About'>About</a></p>
          <p><a href='#Kids'>Kids</a></p>
          <p><a href='#Adults'>Adults</a></p>
          <p><a href='#Other'></a>Other</p>

        </div>
      </div>   
     
      </div>
  )
}

export default Navbar