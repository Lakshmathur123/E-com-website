import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProfileModal from '../ProfileModal/ProfileModal';
import LoginModal from '../LoginModal/LoginModal';

const Navbar = () => {
  const [modalType, setModalType] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
   
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log("Token exists:", !!token); 
  }, []);

  const openModal = () => {
    if (isLoggedIn) {
      setModalType('profile');
    } else {
      setModalType('login');
    }
    console.log("Modal type set to:", isLoggedIn ? 'profile' : 'login');
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleLogin = () => {
    // Simulate login logic here
    setIsLoggedIn(true);
    setModalType('profile'); // Switch to profile modal after login
    console.log("User logged in, switching to profile modal"); // Debug: Log login success
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    closeModal();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src="./logo-laksh.png" alt="logo" className="logo-image" />
          </Link>
          <Link to="/" className="logo-text">
            Laksh's Shop
          </Link>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search Any Product" className="search-bar" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="profile-cart">
          <button onClick={openModal} className="profile-button">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </button>
          <Link to="/cart" className="cart-button">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          </Link>
        </div>
      </nav>
      <div className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
       
        {/* Conditionally render modals */}
        {modalType === 'login' && (
          <LoginModal
            isOpen={true}
            onRequestClose={closeModal}
            onLogin={handleLogin}
          />
        )}
        
        {modalType === 'profile' && isLoggedIn && (
          <ProfileModal
            isOpen={true}
            onRequestClose={closeModal}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
