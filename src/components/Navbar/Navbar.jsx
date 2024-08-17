import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../LoginModal/LoginModal';
import ProfileModal from '../ProfileModal/ProfileModal';

const Navbar = () => {
  const [modalType, setModalType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const openModal = () => {
    setLoginState(true);
  };

  const closeModal = () => {
    setLoginState(false);
    setModalType(null); // Reset modal type when closed
  };

  const checkedLogin = () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setModalType('profile');
    } else {
      setIsLoggedIn(false);
      setModalType('login');
    }
    openModal(); 
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
          <button onClick={checkedLogin} className="profile-button">
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

        {modalType === 'login' && (
          <LoginModal
            isOpen={loginState}
            onRequestClose={closeModal}
          />
        )}
       {modalType === 'profile' && isLoggedIn && (
          <ProfileModal
            isOpen={loginState}
            onRequestClose={closeModal}
            />
        )}
      </div>
    </div>
  );
};

export default Navbar;
