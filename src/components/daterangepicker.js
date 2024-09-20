import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for API calls

const DateRangePicker = ({ setIncomeData, setExpenseData }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Function to handle API call
  const handleSubmit = async () => {
    try {
      const response = await axios.post("YOUR_SQLITE_API_URL", {
        fromDate,
        toDate,
      });

      // Assuming API returns income and expense data
      const { incomeData, expenseData } = response.data;

      // Update parent components with the data
      setIncomeData(incomeData);
      setExpenseData(expenseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="date-range-picker">
      <div className="heading">
        <h4>Select date to view Income & Expenses</h4>
      </div>
      <div>
        <label>
          From:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>
        <label>
          To:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>
        <button className="submit-dateRangePicker submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DateRangePicker;
