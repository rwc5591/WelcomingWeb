import React from 'react'
import './header.css'

const Header = () => {
  return (
      <div className='headerpadding' id='Home'>
      <div className='headercontent'>
        <h1 className='gradient__text'>
          Welcome to Welcoming WEB.
        </h1>
        <div className='headerbuttons'>
          <button type='button'> Kids</button>
          <button type='button'> Adults</button>
          <button type='button'> Other</button>
        </div>
      
      </div>
      </div>
  )
}

export default Header