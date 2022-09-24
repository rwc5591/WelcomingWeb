import React from 'react'
import { Footer, Blog, Header, Feature, Other, About } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      {/* <Brand />
      <About />
      <Feature />
      <Other />
      <CTA />
      <Blog />*/}
      <Footer /> 
    </div>
  )
}

export default App