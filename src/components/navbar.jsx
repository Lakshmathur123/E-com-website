import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src="./logo-laksh.png" alt="logo" className="logo-image" />
          <span className="logo-text">Laksh's Shop</span>
        </div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile-cart">
          <Link to="/login" className="profile-button">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </Link>
          <Link to="/cart" className="cart-button">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          </Link>
        </div>
      </nav>
      <ul className="nav-links">
        <li><a href="\">Home</a></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><a href="\">About Us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
