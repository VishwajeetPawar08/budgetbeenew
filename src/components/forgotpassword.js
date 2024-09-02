// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ForgotPassword.css'; // Assuming you have CSS for styling
import Navbar from "./navbarsigninup";

function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     // You can validate the email here before navigating
//     navigate('/verify-otp', { state: { email } });
//   };

  return (
    <div className="forgot-password-container">
        <Navbar />
      <h2>Forgot Password</h2>
      <img src="/path-to-your-image.jpg" alt="Forgot Password" className="forgot-password-image" />
      <div className="form-group">
        <label>Enter your registered email:</label>
        <input 
          type="email" 
          //value={email} 
          //onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      {/* onClick={handleNext} */}
      <button >Next</button>
    </div>
  );
}

export default ForgotPassword;
