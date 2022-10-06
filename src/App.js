import React from 'react'
import { Footer, Header, Resources, About } from './containers'
import { Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
       
      <About />
      <Resources />
    
      <Footer /> 
    </div>
  )
}

export default App