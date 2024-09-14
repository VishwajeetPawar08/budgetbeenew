import React, { useState } from 'react';
import MyProfile from './myprofile';
import ChangePassword from './changepassword';

const ProfileSection = () => {
  const [view, setView] = useState(''); // Determines what section to show

  return (
    <div>
      <button onClick={() => setView('profile')}>My Profile</button>
      <button onClick={() => setView('changePassword')}>Change Password</button>
      <button onClick={() => setView('addAccount')}>Add Account</button>
      <button onClick={() => setView('deleteAccount')}>Delete Account</button>

      {/* Conditionally render components based on button click */}
      {view === 'profile' && <MyProfile />}
      {view === 'changePassword' && <ChangePassword />}
      {/* Add Account and Delete Account logic can be added similarly */}
    </div>
  );
};

export default ProfileSection;
