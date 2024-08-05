import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import Cart from './Pages/Cart';
import ContactUs from './Pages/ContactUs'
import ProductDetails from './Pages/Productdetails';
import Categories from './Pages/Categories';
import CategoryItems from './Pages/CategoryItems';
import AboutUs from './Pages/AboutUs';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryItems />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </Router>
  );
}