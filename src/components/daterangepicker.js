import React, { useState } from "react";

const DateRangePicker = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  return (
    <div className="date-range-picker">
      <div className="heading">
        <h4>
          Select date to view Income & Expenses
        </h4>
      </div>
      <i className="calendar-icon">📅</i>
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
    </div>
  );
};

export default DateRangePicker;
