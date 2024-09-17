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
          <div className="card" key={"index"}>
            <p>Category: {"income.category"}</p>
            <p>Description: {"income.description"}</p>
            <p>Amount: {"income.amount"}</p>
            <button>View Details</button>
          </div>
          
        </div>

      {/* Modal for viewing full details */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h2>Income Details</h2>
            {selectedIncome && (
              <div>
                <p><strong>Category:</strong> {selectedIncome.category}</p>
                <p><strong>Description:</strong> {selectedIncome.description}</p>
                <p><strong>Amount:</strong> ${selectedIncome.amount}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomeDetails;
