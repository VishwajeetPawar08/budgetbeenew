import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaMoon, FaBell } from 'react-icons/fa';
import AddExpenseBox from './addexpensebox';
import AddIncomeBox from './addincomebox';
import './dashboard.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleSettings, setDropdownVisibleSettings] = useState(false)
  const [expenseBoxVisible, setExpenseBoxVisible] = useState(false);
  const [incomeBoxVisible, setIncomeBoxVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleDropdownSettings = () => {
    setDropdownVisibleSettings(!dropdownVisibleSettings);
  };

  const toggleExpenseBox = () => {
    setExpenseBoxVisible(!expenseBoxVisible);
  };

  const toggleIncomeBox = () => {
    setIncomeBoxVisible(!incomeBoxVisible);
  };

  const [view, setView] = useState(''); // Determines what section to show


  return (
    <div className="div-navbar">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          <h2 className='navbar-project-name'><span className='npn-B'>B</span>udget<span className='npn-B'>B</span>ee</h2>
        </div>
        <div className="navbar-center">
          <a href="/about-us" className="navbar-link">About Us</a>
          <a href="/contact-us" className="navbar-link">Contact Us</a>
        </div>
        <div className="navbar-right">
          <button className="navbar-button" onClick={toggleIncomeBox}>Add Income</button>
          <button className="navbar-button" onClick={toggleExpenseBox}>Add Expense</button>
          
          
          <div className="profile-container settings-dropdown">
          <FaCog className="navbar-icon" title="Settings" onClick={toggleDropdownSettings} />
            {dropdownVisibleSettings && (
              <div className="dropdown-menu">
                <button onClick={"handleSignIn"}>Export Data</button>
                <button onClick={"handleSignOut"}>Terms Of Use</button>
                <button onClick={"handleSignIn"}>About Us</button>
                <button onClick={"handleSignOut"}>Feedback</button>
            </div>
            )}
          </div>

          <FaMoon className="navbar-icon" title="Night Mode" />
          <FaBell className="navbar-icon" title="Notifications" />

          <div className="profile-container">
            <FaUserCircle className="navbar-icon" title="Profile" onClick={toggleDropdown} />
            {dropdownVisible && (
              <div className="dropdown-menu">
                <p>ID: {"user".id} 34567890</p>
                <p>Name: {"user".name} Vishwajeet Pawar</p>
                <p>Email: {"user".email}vishuvp6254@gmail.com</p>
                <button className='SignOut' onClick={"handleSignIn"}>Sign Out</button>
                <button className='DeleteAccount' onClick={"handleSignOut"}>Delete Account</button>
            </div>
            )}
          </div>
        </div>
        {expenseBoxVisible && <AddExpenseBox onClose={toggleExpenseBox} />}
        {incomeBoxVisible && <AddIncomeBox onClose={toggleIncomeBox} />}
      </nav>
    </div>
  );
}

export default Navbar;
