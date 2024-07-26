import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Products from './components/products';
import Home from './Home';
import Cart from './components/Cart/Cart';
import ContactUs from './components/ContactUs/ContactUs';
import ProductDetails from './components/Productdetails/Productdetails';
import Categories from './components/Cateogries/Cateogry';
import CategoryPage from './components/Cateogries/CateogryPage';
import Login from './login';





export default function App() {
  return (
  <>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
       <Route path='/Contact' element={<ContactUs/>}/>
       <Route path="/product/:productId" element={<ProductDetails />} />
       <Route path='/cateogries' element={<Categories />}/>
       <Route path='/cateogry/:cateogryName' element={<CategoryPage />} />
       <Route path='/login' element={<Login />} />
             </Routes>
    </Router>
  </>

  )
}
