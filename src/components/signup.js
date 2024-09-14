// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Navbar from "./navbarsigninup";
// import "./signup.css"

// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       //replace signup api
//       const response = await fetch("http://localhost:5000/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         // Redirect to the sign-in page after successful signup
//         navigate("/signin");
//       } else {
//         const data = await response.json();
//         alert(data.message || "Sign up failed");
//       }
//     } catch (error) {
//       console.error("Error during sign up:", error);
//       alert("An error occurred during sign up. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <br />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>
//         Already have an account? <Link to="/signin">Sign In</Link>
//       </p>
//     </div>
//   );
// }

// export default SignUp;



import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Navbar from "./navbarsigninup";
import "./signinandsignup.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        navigate("/signin");
      } else {
        const data = await response.json();
        alert(data.message || "Sign up failed");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      alert("An error occurred during sign up. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="signup-card">
        {/* <Navbar /> */}
        <h2>Create a New Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
