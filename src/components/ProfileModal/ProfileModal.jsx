import React, { useEffect } from 'react';
import Modal from 'react-modal';

function checkRememberMe(rememberMe, key, value) {
  if (rememberMe) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

const ProfileModal = ({ isOpen, onRequestClose, onLogout }) => {
  let username;
  let token;
  let userData = null;

  const fetchUserData = async (username, token) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/1`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data && data.username === username) {
        userData = data;
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || sessionStorage.getItem('username');
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (storedUsername && storedToken) {
      username = storedUsername;
      token = storedToken;
      fetchUserData(storedUsername, storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    onLogout(); // Notify Navbar to update state
  };

  if (!isOpen || !userData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Profile Modal"
      className="profile-modal"
      overlayClassName="profile-overlay"
    >
      <div className="profile-modal-content">
        <button className="profile-close-button" onClick={onRequestClose}>X</button>
        <div className="profile-info">
          <h2>Welcome, {username}!</h2>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
