// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ResetPassword.css';
// import sqlite3 from 'sqlite3'; // You may need to install this package
// import Navbar from './navbarsigninup';

function ResetPassword() {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const location = useLocation();
//   const { email } = location.state;
//   const navigate = useNavigate();

//   const handlePasswordReset = () => {
//     if (newPassword !== confirmPassword) {
//       alert('Passwords do not match. Please try again.');
//       return;
//     }

//     // Simulate password update logic
//     const db = new sqlite3.Database('./my-database.db');
//     db.run(`UPDATE users SET password = ? WHERE email = ?`, [newPassword, email], function(err) {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log(`Password updated for email: ${email}`);
//       alert('Password reset successfully!');
//       navigate('/signin');
//     });
//     db.close();
//   };

  return (
    <div className="reset-password-container">
        {/* <Navbar /> */}
      <h2>Reset Password</h2>
      <div className="form-group">
        <label>Email:</label>
        {/* value={email} */}
        <input type="email" value="hello" readOnly />
      </div>
      <div className="form-group">
        <label>New Password:</label>
        <input 
          type="password" 
        //   value={newPassword} 
          value="newpassword"
        //   onChange={(e) => setNewPassword(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input 
          type="password" 
        //   value={confirmPassword} 
        //   onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
      </div>
      {/* onClick={handlePasswordReset} */}
      <button >Reset Password</button>
    </div>
  );
}

export default ResetPassword;
