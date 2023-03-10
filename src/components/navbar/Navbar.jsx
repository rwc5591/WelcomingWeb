import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiClosedLin} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img alt="side image of a spider web" src="web.png" className= "web"></img>
      <div className='navbarlinks'>
        <div className='navbarlinksLogo'>
          <h1>WelcomingWeb</h1>
        </div>
        <div className='navbarlinkscontainer'>
          <p><a href='/home'>Home</a></p>
          <p><a href='/About'>About</a></p>
          <p className="kidsRef"><a href='/Kids'>Kids</a></p>
          <p className="adultsRef"><a href='/Adults'>Adults</a></p>
          <p className="learningRef"><a href='/Learning'>Learning</a></p>
          <p className="resourcesRef"><a href='/Resources'>Resources</a></p>
        </div>
      </div>   
      </div>
  )
}
export default Navbar