// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './VerifyOtp.css';
// import Navbar from "./navbarsigninup";
import { Link } from "react-router-dom";

function VerifyOtp() {
//   const [otp, setOtp] = useState('');
//   const location = useLocation();
//   const { email } = location.state;
//   const navigate = useNavigate();

//   const handleOtpVerification = () => {
//     // Simulate OTP verification
//     const isOtpValid = otp === '123456'; // Replace with your OTP validation logic

//     if (isOtpValid) {
//       navigate('/reset-password', { state: { email } });
//     } else {
//       alert('Invalid OTP. Please try again.');
//     }
//   };

  return (
    <div className="container">
      <div className="verify-otp-card">
          {/* <Navbar /> */}
        <h2>Verify OTP</h2>
        <div className="form-group">
          <label>Email:</label>
          {/* value={email} */}
          <input type="email" value="ok@gmail.com" readOnly />
        </div>
        <div className="form-group">
          <label>Enter OTP:</label>
          <input 
            type="text" 
          //   value={otp} 
          //   onChange={(e) => setOtp(e.target.value)} 
            required 
          />
        </div>
        {/* onClick={handleOtpVerification} */}
        <button >Verify OTP</button>
        <Link to="/changepassword">Next2</Link>
      </div>
    </div>
  );
}

export default VerifyOtp;
