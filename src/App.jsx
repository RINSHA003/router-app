import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Header from './units/Header';
export default function 
 () {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}
