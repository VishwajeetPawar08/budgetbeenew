import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const ExpensesDetails = () => {
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     axios.get('/api/expenses').then((response) => {
//       setExpenses(response.data);
//     });
//   }, []);

  return (
    <div className="expenses-details">
      <h2>Expenses</h2>
      <div className="expense-cards">
        {/* {expenses.map((expense, index) => ( */}
          <div className="card" key={"index"}>
            <p>Category: {"expense.category"}</p>
            <p>Description: {"expense.description"}</p>
            <p>Spent Amount: {"expense.amount"}</p>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ExpensesDetails;
