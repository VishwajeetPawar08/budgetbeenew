// import React, { useState } from 'react';
import React from 'react'
// import './addincomeexpensebox.css';
import "./dashboard.css"

function AddExpenseBox({ onClose }) {
//   const [category, setCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = async () => {
//     if (category && amount && date) {
//       try {
//         const response = await fetch('/api/add-expense', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ category, amount, date }),
//         });
//         if (response.ok) {
//           alert('Expense added successfully!');
//           onClose();
//         } else {
//           alert('Failed to add expense.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred.');
//       }
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

const heading = {
  // color: "black",
  textAlign: "center",
  paddingBottom: "20px"
};

const fontt={
  color: "white"
}


  return (
    <div className="overlay">
      <div className="add-box">
        <h3 style={heading}>Add Expense</h3>
        <div className="form-group">
          <label >Category:</label>
          <input 
            type="text" 
            // value={category} 
            value={"category"} 
            // onChange={(e) => setCategory(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label style={fontt}>Amount:</label>
          <input 
            type="number" 
            // value={amount} 
            value={"amount"} 
            // onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label style={fontt}>Date:</label>
          <input 
            type="date" 
            // value={date} 
            value={"date"} 
            // onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        {/* onClick={handleSubmit} */}
        <button className='submit-button income-expense-button'>Submit</button>
        <button onClick={onClose} className="close-button income-expense-button">Close</button>
      </div>
    </div>
  );
}

export default AddExpenseBox;

