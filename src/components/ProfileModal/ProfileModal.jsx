import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function checkRememberMe(rememberMe, key, value) {
  if ( rememberMe) {
    localStorage.setItem(key, JSON.stringify(value) );
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};



const ProfileModal = ({ isOpen, onRequestClose, onLogout }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null);
  
   
  useEffect(() => {

    const storedUsername = localStorage.getItem('username') || sessionStorage.getItem('username');
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');

   if (storedUsername && storedToken) {
    setUsername(storedUsername);
    fetchUserdata(storedUsername, storedToken);
   }
  }, []);

  const fetchUserdata = async (username, token) => {
    setLoading(true);
    try {
      const response =await fetch('https://fakestoreapi.com/users/1');
      const data  = await response.json(); 
      if (data && data.username === username) {
        setUserData(data);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading (false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    setUserData(null);
    setUsername('');
    onLogout();
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
        <div className="profile-form-container">
        {loading ? <p>Loading...</p> : (
          <>
          <h2>Welcome, {userData.username}</h2>
          <button className="logout-button" onClick={onLogout}>Logout</button>

          </>
       )}
           </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;

