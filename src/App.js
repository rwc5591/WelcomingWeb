import React from 'react'

//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Footer, Header, About, Kids, Adults, Resources, } from './containers'
import { Navbar, Home } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Kids />
      <Adults/>
      
      <Resources />
    
      <Footer /> 
    </div>
  )
}

export default App