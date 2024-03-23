import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import University from './components/University';
import EsFeature from './components/EsFeature';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
//import and export
// const University = require('./components/University')

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EsFeature />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      </BrowserRouter>

        {/* <EsFeature /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          Learn React 1 {user?.name}
        </a> */}
        
        
      </header>
    </div>
  );
}

export default App;
