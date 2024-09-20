// import React, { useState } from 'react';
// import { FaUserCircle, FaCog, FaMoon, FaBell } from 'react-icons/fa';
// import AddExpenseBox from './addexpensebox';
// import AddIncomeBox from './addincomebox';
// import './dashboard.css'
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [dropdownVisibleSettings, setDropdownVisibleSettings] = useState(false)
//   const [expenseBoxVisible, setExpenseBoxVisible] = useState(false);
//   const [incomeBoxVisible, setIncomeBoxVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const toggleDropdownSettings = () => {
//     setDropdownVisibleSettings(!dropdownVisibleSettings);
//   };

//   const toggleExpenseBox = () => {
//     setExpenseBoxVisible(!expenseBoxVisible);
//   };

//   const toggleIncomeBox = () => {
//     setIncomeBoxVisible(!incomeBoxVisible);
//   };

//   const [view, setView] = useState(''); // Determines what section to show


//   return (
//     <div className="div-navbar">
//       <nav className="navbar">
//         <div className="navbar-left">
//           <img src="/logo.png" alt="Logo" className="navbar-logo" />
//           <h2 className='navbar-project-name'><span className='npn-B'>B</span>udget<span className='npn-B'>B</span>ee</h2>
//         </div>
//         <div className="navbar-center">
//           <a href="/about-us" className="navbar-link">About Us</a>
//           <a href="/contact-us" className="navbar-link">Contact Us</a>
//         </div>
//         <div className="navbar-right">
//           <button className="navbar-button" onClick={toggleIncomeBox}>Add Income</button>
//           <button className="navbar-button" onClick={toggleExpenseBox}>Add Expense</button>
          
          
//           <div className="profile-container settings-dropdown">
//           <FaCog className="navbar-icon" title="Settings" onClick={toggleDropdownSettings} />
//             {dropdownVisibleSettings && (
//               <div className="dropdown-menu">
//                 <button onClick={"handleSignIn"}>Export Data</button>
//                 <button onClick={"handleSignOut"}>Terms Of Use</button>
//                 <button onClick={"handleSignIn"}>About Us</button>
//                 <button onClick={"handleSignOut"}>Feedback</button>
//             </div>
//             )}
//           </div>

//           <FaMoon className="navbar-icon" title="Night Mode" />
//           <FaBell className="navbar-icon" title="Notifications" />

//           <div className="profile-container">
//             <FaUserCircle className="navbar-icon" title="Profile" onClick={toggleDropdown} />
//             {dropdownVisible && (
//               <div className="dropdown-menu">
//                 <p>ID: {"user".id} 34567890</p>
//                 <p>Name: {"user".name} Vishwajeet Pawar</p>
//                 <p>Email: {"user".email}vishuvp6254@gmail.com</p>
//                 <button className='SignOut' onClick={"handleSignIn"}>Sign Out</button>
//                 <button className='DeleteAccount' onClick={"handleSignOut"}>Delete Account</button>
//             </div>
//             )}
//           </div>
//         </div>
//         {expenseBoxVisible && <AddExpenseBox onClose={toggleExpenseBox} />}
//         {incomeBoxVisible && <AddIncomeBox onClose={toggleIncomeBox} />}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;










import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaMoon, FaBell } from 'react-icons/fa';
import AddExpenseBox from './addexpensebox';
import AddIncomeBox from './addincomebox';
import './dashboard.css';
import DeleteAccountModal from './deleteaccountmodal';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisibleSettings, setDropdownVisibleSettings] = useState(false);
  const [expenseBoxVisible, setExpenseBoxVisible] = useState(false);
  const [incomeBoxVisible, setIncomeBoxVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false); // Track modal visibility
  const navigate = useNavigate(); // useNavigate hook for navigation

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

  // Mock user data (replace with actual data from SQLite API)
  const user = {
    id: '34567890',
    name: 'Vishwajeet Pawar',
    email: 'vishuvp6254@gmail.com'
  };

  // Handle sign-out
  const handleSignOut = () => {
    // Call SQLite API to log out
    // Example: axios.post('/api/logout')
    console.log('Logging out...');
    // After successful logout, redirect to the SignIn page
    navigate('/signin'); // Use navigate instead of history.push
  };

  // Handle delete account
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      // Call SQLite API to delete user account
      // Example: axios.delete(`/api/delete-user/${user.id}`)
      setDeleteModalVisible(true);
      // After successful deletion, redirect to the SignIn page or any other page
    }
  };


  const handleConfirmDelete = () => {
    console.log('Deleting account...');
    setDeleteModalVisible(false);
    navigate('/signin'); // Navigate after deletion
  };

  return (
    <div className="div-navbar">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          <h2 className="navbar-project-name">
            <span className="npn-B">B</span>udget<span className="npn-B">B</span>ee
          </h2>
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
                <button onClick={handleSignOut}>Export Data</button>
                <button onClick={handleSignOut}>Terms Of Use</button>
                <button onClick={handleSignOut}>About Us</button>
                <button onClick={handleSignOut}>Feedback</button>
              </div>
            )}
          </div>

          <FaMoon className="navbar-icon" title="Night Mode" />
          <FaBell className="navbar-icon" title="Notifications" />

          <div className="profile-container">
            <FaUserCircle className="navbar-icon" title="Profile" onClick={toggleDropdown} />
            {dropdownVisible && (
              <div className="dropdown-menu">
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <button className="SignOut" onClick={handleSignOut}>Sign Out</button>
                <button className="DeleteAccount" onClick={handleDeleteAccount}>Delete Account</button>
              </div>
            )}
          </div>
        </div>
        {expenseBoxVisible && <AddExpenseBox onClose={toggleExpenseBox} />}
        {incomeBoxVisible && <AddIncomeBox onClose={toggleIncomeBox} />}
      </nav>
      {deleteModalVisible && (
        <DeleteAccountModal
          onClose={() => setDeleteModalVisible(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default Navbar;
