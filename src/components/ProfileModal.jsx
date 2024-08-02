import React, { useState } from 'react';
import Modal from 'react-modal';

const ProfileModal = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const loginResponse = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const loginData = await loginResponse.json();
      if (!loginResponse.ok) {
        throw new Error(loginData.message || 'Authentication failed');
      }

      localStorage.setItem('token', loginData.token);

      const profileResponse = await fetch('https://fakestoreapi.com/users/1', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginData.token}`,
        },
      });

      const profileData = await profileResponse.json();
      if (!profileResponse.ok) {
        throw new Error(profileData.message || 'Failed to fetch profile data');
      }

      setProfileData(profileData);
    } catch (error) {
      setError(error.message);
    } finally {
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
          <h2>Welcome to Laksh's Shop</h2>
          <p>Sign into your account</p>
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
              <div className="forgot-password">
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="profile-form-button">Log In</button>
            </form>
          )}
          {profileData && (
            <div>
              <h2>{profileData.name.firstname} {profileData.name.lastname}</h2>
              <p>Email: {profileData.email}</p>
              <p>Username: {profileData.username}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
