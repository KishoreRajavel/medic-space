import React from "react";
import "./DatePicker.css";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const DatePicker = ({ dateValue, setDateValue }) => {
  return (
    <div className="date-picker">
      <div className="month-line">
        <LocalizationProvider
          style={{ maxWidth: 100 }}
          dateAdapter={AdapterDateFns}
        >
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            value={dateValue}
            disablePast={true}
            onChange={(newValue) => {
              setDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DatePicker;
