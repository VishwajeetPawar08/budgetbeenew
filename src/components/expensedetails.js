import React, { useState } from 'react';

const ExpensesDetails = ({ expenseData = [] }) => {
  const [selectedExpense, setSelectedExpense] = useState(null); // State for selected expense
  const [isModalOpen, setIsModalOpen] = useState(false);        // State for modal visibility

  const openModal = (expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExpense(null);
  };

  const expense = {
    category: "car",
    description:"hello this is the description manually entered",
    amount: 5000
  };


  return (
    <div className="component-4 expenses-details">
      <h2>Expenses</h2>
      <div className="expense-cards">
        {expenseData.length > 0 ? (
          expenseData.map((expense, index) => (
            <div className="card" key={index}>
              <h3>{expense.category}</h3>
              <p>
                {expense.description.length > 25 
                  ? expense.description.substring(0, 25) + '...'
                  : expense.description
                }
              </p>
              <p>Spent Amount: ${expense.amount}</p>
              <button onClick={() => openModal(expense)} className='submit-button'>View Details</button>
            </div>
            
          ))
        ) : (
          <p>No expenses to display</p>
        )}

      </div>
      
      {isModalOpen && selectedExpense && (
        <div className="overlay">
          <div className="item-box">
            <h2 className='expense-data-h2'>Expense Details</h2>
            <p className='expense-data-p'><strong>Category:</strong> {selectedExpense.category}</p>
            <p className='expense-data-p'><strong>Description:</strong> {selectedExpense.description}</p>
            <p className='expense-data-p'><strong>Spent Amount:</strong> ${selectedExpense.amount}</p>
            <button className="yes-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <div className='expense-cards'>
      <div className="card" key={"index"}>
        <p>Category: car1{expense.category}</p>
        <p>Description: {expense.description}</p>
        <p>Amount: {expense.amount}</p>
        <button className='submit-button' onClick={() => openModal(4000)}>View Details</button>
      </div>
      <div className="card" key={"index"}>
        <p>Category: {expense.category}</p>
        <p>Description: {expense.description}</p>
        <p>Amount: {expense.amount}</p>
        <button className='submit-button' onClick={() => openModal(4000)}>View Details</button>
      </div>
      <div className="card" key={"index"}>
        <p>Category: car3{expense.category}</p>
        <p>Description: {expense.description}</p>
        <p>Amount: {expense.amount}</p>
        <button className='submit-button' onClick={() => openModal(4000)}>View Details</button>
      </div>
      <div className="card" key={"index"}>
        <p>Category: car4{expense.category}</p>
        <p>Description: {expense.description}</p>
        <p>Amount: {expense.amount}</p>
        <button className='submit-button' onClick={() => openModal(4000)}>View Details</button>
      </div>
      </div>
    </div>
  );
};

export default ExpensesDetails;
