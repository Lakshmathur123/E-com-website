import React from 'react';
import { Link } from 'react-router-dom';
import { FaFontAwesome } from 'react-icons/fa';

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
            <img src="./profile.png" alt="Profile" className="icon" />
          </button>
          <Link to="/cart" className="cart-button">
            <img src="./cart.png" alt="Cart" className="icon" />
          </Link>
        </div>
      </nav>
      <ul className="nav-links">
       <li> <Link to="/Home">Home</Link></li>
       <li>  <Link to="/cateogries">Cateogries</Link></li>
       <li> <Link to="/contact">Contact Us</Link></li>
       <li> <Link to="/About Us">About Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
