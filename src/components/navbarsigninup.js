import React from "react";
import { FaUserCircle, FaCog } from "react-icons/fa"; // Import icons from react-icons
import "./navbarsigninup.css"; // Assuming you'll use a separate CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <FaCog className="navbar-icon" title="Settings" />
        <FaUserCircle className="navbar-icon" title="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
