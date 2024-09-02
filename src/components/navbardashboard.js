import React, { useState } from "react";
import { FaUserCircle, FaCog, FaMoon, FaBell } from "react-icons/fa";
import "./navbarsigninup.css";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          className="navbar-logo"
        />
      </div>
      <div className="navbar-center">
        {/* replace links */}
        <a href="/#" className="navbar-link">
          About Us
        </a>
        <a href="/#" className="navbar-link">
          Contact Us
        </a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Add Income</button>
        <button className="navbar-button">Add Expense</button>
        <FaMoon className="navbar-icon" title="Night Mode" />
        <FaBell className="navbar-icon" title="Notifications" />
        <FaCog className="navbar-icon" title="Settings" />
        <div className="profile-container">
          <FaUserCircle
            className="navbar-icon"
            title="Profile"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <a href="/my-profile" className="dropdown-item">
                My Profile
              </a>
              <a href="/change-password" className="dropdown-item">
                Change Password
              </a>
              <a href="/add-account" className="dropdown-item">
                Add Account
              </a>
              <a href="/delete-account" className="dropdown-item">
                Delete Account
              </a>
              <a href="/signout" className="dropdown-item">
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
