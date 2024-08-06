import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ProfileModal = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const usersResponse = await fetch('https://fakestoreapi.com/users');
      const users = await usersResponse.json();
      const user = users.find(user => user.username === username && user.password === password);

      if (!user) {
        throw new Error('Authentication failed');
      }

      const userData = {
        id: user.id,
        email: user.email,
        username: user.username,
        name: `${user.name.firstname} ${user.name.lastname}`,
        phone: user.phone
      };

      if (rememberMe) {
        localStorage.setItem('userData', JSON.stringify(userData));
        sessionStorage.removeItem('userData');
      } else {
        sessionStorage.setItem('userData', JSON.stringify(userData));
        localStorage.removeItem('userData');
      }
      console.log('User data stored in:', rememberMe ? 'localStorage' : 'sessionStorage');

      setProfileData(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    sessionStorage.removeItem('userData');
    setProfileData(null);
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
    if (storedUserData) {
      setProfileData(JSON.parse(storedUserData));
    }
  }, []);

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
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !profileData && (
            <form onSubmit={handleLogin} className="profile-form">
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
            </form>
          )}
          {profileData && (
            <div>
              <h2>{profileData.username}</h2>
              <button onClick={handleLogout} className="profile-form-button">Logout</button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
