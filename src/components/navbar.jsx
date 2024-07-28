import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProfileModal from './ProfileModal';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src="./logo-laksh.png" alt="logo" className="logo-image" />
          <span className="logo-text">Laksh's Shop</span>
        </div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="profile-cart">
          <button onClick={openModal} className="profile-button">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </button>
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
      <ProfileModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Navbar;
