import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Products from './components/products';
import Home from './Home';
import Cart from './components/Cart/Cart';
import ContactUs from './components/ContactUs/ContactUs';




export default function App() {
  return (
  <>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
       <Route path='/Contact' element={<ContactUs/>}/>
      </Routes>
    </Router>
  </>

  )
}
