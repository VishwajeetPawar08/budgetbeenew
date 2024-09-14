import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css'; // Assuming you use a single CSS file

const MyProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    profilePic: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Fetch current profile data from SQLite API
    axios.get('/api/profile').then((response) => {
      setProfile(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePic: URL.createObjectURL(file) });
  };

  const handleSave = () => {
    // Save profile changes to SQLite API
    axios.post('/api/updateProfile', profile).then(() => {
      setEditing(false); // Exit edit mode after saving
    });
  };

  return (
    <div className="profile-page">
      <div className="profile-left">
        <img
          src={profile.profilePic}
          alt="Profile"
          className="profile-pic"
        />
        <input type="file" onChange={handleProfilePicChange} />
      </div>

      <div className="profile-right">
        {editing ? (
          <>
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
            <input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <button onClick={() => setEditing(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
