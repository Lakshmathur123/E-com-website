import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
            <img src="./logo-laksh.png" alt="logo"  className='logo-image'/>
            <span className='logo-text'>Laksh's Shop</span>
        </div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile-cart">
          <button className="profile-button">
            <img src="/src/components/images/profile.png" alt="Profile" className="icon" />
          </button>
          <Link to="/cart" className="cart-button">
            <img src="/src/components/images/cart.png" alt="Cart" className="icon" />
          </Link>
        </div>
      </nav>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <Link to="/contact">Contact Us</Link>
        <li><a href="#About Us">About Us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
