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
      // Authenticate user
      const loginResponse = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const loginData = await loginResponse.json();
      if (!loginResponse.ok) {
        throw new Error(loginData.message || 'Authentication failed');
      }

      // Fetch profile data using the token received
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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Profile Modal" className="modal" overlayClassName="overlay">
      <div className="modal-content">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !profileData && (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
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
    </Modal>
  );
};

export default ProfileModal;
