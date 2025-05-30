import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import {Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App
