import React from "react";
import Navbar from "./navbardashboard";
import DateRangePicker from "./daterangepicker";
import Summary from "./summary";
import IncomeDetails from "./incomedetails";
import ExpensesDetails from "./expensedetails";
import './dashboard.css';

function Dashboard() {
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
        <IncomeDetails />
      </div>
      <div className="component component-4">
        <ExpensesDetails />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
