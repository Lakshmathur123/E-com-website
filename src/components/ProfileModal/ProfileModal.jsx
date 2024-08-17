import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const ProfileModal = ({ isOpen, onRequestClose, onLogout }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");

  
  const fetchUserData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const data = await response.json();

     
      const user = data.find(user => user.username === username);
      
      
      if (user) {
        setUserData(user);
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  
  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || sessionStorage.getItem('username');
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (storedUsername && storedToken) {
      setUsername(storedUsername);
      setToken(storedToken);
      fetchUserData();
    }
  }, []);

  
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    onRequestClose(); 
  };

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
          <h2>Welcome, {userData.username}!</h2> 
          <p>Email: {userData.email}</p> 
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
