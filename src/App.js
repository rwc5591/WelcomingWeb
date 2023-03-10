import React from "react";

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  About,
  Kids,
  Adults,
  Learning,
  Resources,
  Scam,
} from "./containers";
import { Navbar, Home, Quiz } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        {/**<Header /> */}
      </div>
      {/**<About />}
      {/**<Kids />}
  {<Adults/> */}

      {/**<Footer /> */}
      <BrowserRouter>
        <Routes>
          {/**<Route path = "/" element={<Navbar />}> </Route>*/}
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Kids" element={<Kids />} />
          <Route path="Adults" element={<Adults />} />
          <Route path="Learning" element={<Learning />} />
          <Route path="Scam" element={<Scam />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="GoPhish" element={<Quiz />} />
          <Route path="" element={<Home />} />
          {/**</Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
