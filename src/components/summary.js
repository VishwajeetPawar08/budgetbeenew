import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Summary = () => {
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    availableBalance: 0,
  });

//   useEffect(() => {
//     // Fetch data from SQLite API
//     axios.get('/api/summary').then((response) => {
//       setSummary(response.data);
//     });
//   }, []);

  return (
    <div className="summary-container">
      <div className="summary-box">
        <p>Total Income: {summary.totalIncome}</p>
      </div>
      <div className="summary-box">
        <p>Total Expenses: {summary.totalExpenses}</p>
      </div>
      <div className="summary-box">
        <p>Available Balance: {summary.availableBalance}</p>
      </div>
    </div>
  );
};

export default Summary;
