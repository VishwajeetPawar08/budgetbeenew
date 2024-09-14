import React, { useState } from 'react';
import axios from 'axios';
import './profile.css';

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    // Verify old password with SQLite
    axios.post('/api/verifyPassword', { oldPassword: passwords.oldPassword }).then((response) => {
      if (response.data.valid) {
        // Save new password to SQLite
        axios.post('/api/changePassword', { newPassword: passwords.newPassword }).then(() => {
          alert('Password changed successfully');
        });
      } else {
        setError('Old password is incorrect');
      }
    });
  };

  return (
    <div className="change-password-page">
      <h2>Change Password</h2>
      <input
        type="password"
        name="oldPassword"
        placeholder="Old Password"
        value={passwords.oldPassword}
        onChange={handleChange}
      />
      <input
        type="password"
        name="newPassword"
        placeholder="New Password"
        value={passwords.newPassword}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={passwords.confirmPassword}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Change Password</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ChangePassword;
