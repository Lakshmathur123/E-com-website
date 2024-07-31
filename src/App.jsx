import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Cart from './components/Cart/Cart';
import ContactUs from './components/ContactUs/ContactUs';
import ProductDetails from './components/Productdetails/Productdetails';
import Categories from './components/Category/Categories';
import CategoryItems from './components/Category/CategoryItems';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryItems />} />
      </Routes>
    </Router>
  );
}
