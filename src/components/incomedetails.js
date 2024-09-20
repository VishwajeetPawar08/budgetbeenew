import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const IncomeDetails = ({ incomeData }) => {
  const [selectedIncome, setSelectedIncome] = useState(null); // State for selected income
  const [isModalOpen, setIsModalOpen] = useState(false);      // State for modal visibility

  const openModal = (income) => {
    setSelectedIncome(income);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIncome(null);
  };

  const income = {
    category: "car",
    description:"hello this is the description manually entered",
    amount: 5000
  };

  return (
    <div className="component-3 income-details">
      <h2>Income Details</h2>
        <div className="income-cards">
          <div className='card'>
            {incomeData.map((income, index) => (
              <div className="card" key={index}>
                <h3>{income.category}</h3>
                <p>
                  {income.description.length > 25 
                    ? income.description.substring(0, 25) + '...'
                    : income.description
                  }
                </p>
                <p>Amount: ${income.amount}</p>
                <button onClick={() => openModal(income)}>View Details</button>
              </div>
            ))}
          </div>

          <div className="card" key={"index"}>
            <p>Category: {income.category}</p>
            <p>Description: {income.description}</p>
            <p>Amount: {income.amount}</p>
            <button onClick={() => openModal(4000)}>View Details</button>
          </div>
          <div className="card" key={"index"}>
            <p>Category: {"income.category"}</p>
            <p>Description: {"income.description"}</p>
            <p>Amount: {"income.amount"}</p>
            <button>View Details</button>
          </div>
          <div className="card" key={"index"}>
            <p>Category: {"income.category"}</p>
            <p>Description: {"income.description"}</p>
            <p>Amount: {"income.amount"}</p>
            <button>View Details</button>
          </div>
          <div className="card" key={"index"}>
            <p>Category: {"income.category"}</p>
            <p>Description: {"income.description"}</p>
            <p>Amount: {"income.amount"}</p>
            <button>View Details</button>
          </div>
          <div className="card" key={"index"}>
            <p>Category: {"income.category"}</p>
            <p>Description: {"income.description"}</p>
            <p>Amount: {"income.amount"}</p>
            <button>View Details</button>
          </div>
          
        </div>

      {/* Modal for viewing full details */}
      {isModalOpen && (
        <div className="overlay">
          <div className="item-box">
            
            <h2 className='income-data-h2'>Income Details</h2>
            {selectedIncome && (
              <div>
                <p className='income-data-p'><strong>Category:</strong> {income.category}</p>
                <p className='income-data-p'><strong>Description:</strong> {income.description}</p>
                <p className='income-data-p'><strong>Amount:</strong> ${income.amount}</p>
                {/* <p><strong>Category:</strong> {selectedIncome.category}</p>
                <p><strong>Description:</strong> {selectedIncome.description}</p>
                <p><strong>Amount:</strong> ${selectedIncome.amount}</p> */}
              </div>
            )}
            <button className="yes-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomeDetails;
