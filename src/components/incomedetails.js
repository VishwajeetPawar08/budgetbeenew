import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const IncomeDetails = () => {
//   const [incomes, setIncomes] = useState([]);

//   useEffect(() => {
//     axios.get('/api/incomes').then((response) => {
//       setIncomes(response.data);
//     });
//   }, []);

  return (
    <div className="income-details">
      <h2>Income Details</h2>
      <div className="income-cards">
        {/* {incomes.map((income, index) => ( */}
          <div className="card" key={"index"}>
            <p>Category: {"income.category"}</p>
            <p>Description: {"income.description"}</p>
            <p>Amount: {"income.amount"}</p>
            <button>Show Details</button>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default IncomeDetails;
