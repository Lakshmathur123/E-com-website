import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function checkRememberMe(rememberMe, key, value) {
  if ( rememberMe) {
    localStorage.setItem(key, JSON.stringify(value) );
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};



const ProfileModal = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (username === "" || password === "") {
    console.log('Enter Your Email and password')     
    setLoading(false);
    return;
    
    };
      const data = JSON.stringify( {username: username, password: password})
    try   
       {
      const userApi = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body:data
    }) 
   
    const response = await userApi.json();
    if(response?.token) {
      checkRememberMe(rememberMe, "token", response?.token )
      checkRememberMe(rememberMe, "username", username)
      onRequestClose();
    }  
  
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
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
        <div className="profile-form-container">
          {loading ? <p>Loading...</p> :  <form onSubmit={handleLogin} className="profile-form">
              <div className="profile-form-group">
                <input
                  type="text"
                  value={username}
                  placeholder="Phone or Email address"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="profile-form-input"
                />
              </div>
              <div className="profile-form-group">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="profile-form-input"
                />
              </div>
              <div className="profile-form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember Me
                </label>
              </div>
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="profile-form-button">Log In</button>
            </form> }
            
          
      
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;

