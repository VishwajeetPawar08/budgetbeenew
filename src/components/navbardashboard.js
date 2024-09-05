import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaMoon, FaBell } from 'react-icons/fa';
import AddExpenseBox from './addexpensebox';
import AddIncomeBox from './addincomebox';
import './navbarsigninup.css';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [expenseBoxVisible, setExpenseBoxVisible] = useState(false);
  const [incomeBoxVisible, setIncomeBoxVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleExpenseBox = () => {
    setExpenseBoxVisible(!expenseBoxVisible);
  };

  const toggleIncomeBox = () => {
    setIncomeBoxVisible(!incomeBoxVisible);
  };


  const btnStyle = {
    width: "10%"
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-center">
        <a href="/about-us" className="navbar-link">About Us</a>
        <a href="/contact-us" className="navbar-link">Contact Us</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button" onClick={toggleIncomeBox}>Add Income</button>
        <button className="navbar-button" onClick={toggleExpenseBox}>Add Expense</button>
        <FaCog className="navbar-icon" title="Settings" />
        <FaMoon className="navbar-icon" title="Night Mode" />
        <FaBell className="navbar-icon" title="Notifications" />
        
        <div className="profile-container">
          <FaUserCircle 
            className="navbar-icon" 
            title="Profile" 
            onClick={toggleDropdown} 
          />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <a href="/my-profile" className="dropdown-item">My Profile</a>
              <a href="/change-password" className="dropdown-item">Change Password</a>
              <a href="/add-account" className="dropdown-item">Add Account</a>
              <a href="/delete-account" className="dropdown-item">Delete Account</a>
            </div>
          )}
        </div>
      </div>
      {expenseBoxVisible && <AddExpenseBox onClose={toggleExpenseBox} />}
      {incomeBoxVisible && <AddIncomeBox onClose={toggleIncomeBox} />}
    </nav>
  );
}

export default Navbar;
