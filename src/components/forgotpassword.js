// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ForgotPassword.css'; // Assuming you have CSS for styling
// import Navbar from "./navbarsigninup";
import "./signinandsignup.css"
import { Link } from "react-router-dom";

function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     // You can validate the email here before navigating
//     navigate('/verify-otp', { state: { email } });
//   };

  return (
    <div className="container">
      <div className="forgot-password-card">
          {/* <Navbar /> */}
        <h2>Forgot Password</h2>
        <img src="/forgot-password.jpg" alt="Forgot Password" className="forgot-password-image" />
        <div className="form-group">
          <label>Enter your registered email:</label>
          <input 
            type="email" 
            //value={email} 
            //onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <p>
          <Link to="/signin">Return to Sign In</Link>
        </p>
        {/* onClick={handleNext} */}
        <button >Next</button>
        <Link to="/verifyotp">Next2</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
