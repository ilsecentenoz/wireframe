import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
//Components
import NavBar from './component/Menu';
import Footer from './component/Footer';

//Pages
import Home from './component/Home';
import Terms from './component/Terms';
import Faqs from './component/Faqs';
import Premios from './component/Premios';
import Login from './component/Login';


function App() {
  return (
    <>
      <div className='Container'>
        <Router>
          <NavBar />  
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Terms" element={<Terms />}/>
            <Route path="/Faqs" element={<Faqs />}/>
            <Route path="/Premios" element={<Premios />}/>
            <Route path="/Login" element={<Login />}/>
          </Routes>
        </Router>

        <Footer />  
      </div>

    </>
  )
}

export default App
