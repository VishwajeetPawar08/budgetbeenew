// import React, { useState } from 'react';
import React from 'react'
import './addincomeexpensebox.css';

function AddIncomeBox({ onClose }) {
//   const [category, setCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [salary, setSalary] = useState('');

//   const handleSubmit = async () => {
//     if (category && amount && salary) {
//       try {
//         const response = await fetch('/api/add-income', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ category, amount, salary }),
//         });
//         if (response.ok) {
//           alert('Income added successfully!');
//           onClose();
//         } else {
//           alert('Failed to add income.');
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
        <h3 style={heading}>Add Income</h3>
        <div className="form-group">
          <label style={fontt}>Category:</label>
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
        <button className='income-expense-button'>Submit</button>
        <button onClick={onClose} className="close-button income-expense-button">Close</button>
      </div>
    </div>
  );
}

export default AddIncomeBox;
