import React, { useState } from "react";
import "./AppointmentFilter.css";
import TextField from "@mui/material/TextField";
import DatePicker from "../../../../UI/DatePicker/DatePicker";
import Card from "../../../../UI/Card/Card";

const AppointmentFilter = () => {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <div className="filter">
      <div className="filter-title">Filter</div>
      <Card style={{ maxWidth: "100px" }}>
        {!datepickerState && (
          <div className="filter-form">
            <TextField placeholder="Name" />
            <TextField placeholder="Token" />
            <TextField placeholder="Token" />
          </div>
        )}
      </Card>
      <div className="date-picker">
        <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
      </div>
    </div>
  );
};

export default AppointmentFilter;
