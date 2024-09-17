import React, { useState, useEffect } from "react";
import Navbar from "./navbardashboard";
import DateRangePicker from "./daterangepicker";
import Summary from "./summary";
import IncomeDetails from "./incomedetails";
import ExpensesDetails from "./expensedetails";
import './dashboard.css';

function Dashboard() {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    fetchIncomeData();
  }, []);

  const fetchIncomeData = async () => {
    try {
      // Assuming you have a function to fetch income data from your SQLite API
      const response = await fetch('/api/income');  // Your API endpoint here
      const data = await response.json();
      setIncomeData(data);  // Save the income data to the state
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">
      <div className="component component-1">
        <DateRangePicker />
      </div>
      <div className="component component-2">
        <Summary />
      </div>
      <div className="component component-3">
        <IncomeDetails incomeData={incomeData}/>
      </div>
      <div className="component component-4">
        <ExpensesDetails />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
