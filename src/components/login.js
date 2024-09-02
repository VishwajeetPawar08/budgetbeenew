import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./navbarsigninup";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //replace with signin api
      //   const response = await fetch("http://localhost:5000/api/signin", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email, password }),
      //   });

      if (true) {
        // Redirect to the dashboard after successful sign-in
        navigate("/dashboard");
      }
      //   else {
      //     const data = await response.json();
      //     alert(data.message || "Sign in failed");
      //   }
    } catch (error) {
      console.error("Error during sign in:", error);
      alert("An error occurred during sign in. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
    </div>
  );
}

export default SignIn;
