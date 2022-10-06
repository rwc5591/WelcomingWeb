import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Footer, Header, Resources, About } from './containers'
import { Navbar } from './components'
import { Home } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <BrowserRouter><Routes>
          {/**<Route index element={<Home />} />*/}
          </Routes></BrowserRouter>
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