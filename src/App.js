import React from 'react'

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
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
      {/**<Kids />}
      {<Adults/>}
      
  {<Resources />*/}
    
      <Footer /> 
      <BrowserRouter>
      <Routes>
        {/**<Route path = "/" element={<Navbar />}> </Route>*/}
          {/**<Route index element={<Home />}> */}
          <Route path = "Home" element = {<Home />} />
          <Route path = "Kids" element ={<Kids />} />
          <Route path = "Adults" element ={<Adults />} />
          <Route path = "Resources" element ={<Resources />} />
        {/**</Route>*/}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App