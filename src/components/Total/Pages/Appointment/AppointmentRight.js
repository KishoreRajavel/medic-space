import React, { useState } from "react";
import "./AppointmentRight.css";
import Button from "../../../../UI/Button/Button";
import { TextField } from "@mui/material";
import DatePicker from "../../../../UI/DatePicker/DatePicker";

const AppointmentRight = ({
  setNewAppointmentState,
  arrivedCountValue,
  patients,
  filterName,
  filterTag,
  setFilterName,
  setFilterTag,
  filterDate,
  setFilterDate,
}) => {
  const newAppointmentHandler = () => {
    setNewAppointmentState(() => true);
  };

  const AppointmentCount = patients.filter(
    (item) => item.appointment.appointment === "yes"
  );

  return (
    <div className="appointment-right-area">
      <div className="line">
        <div>
          <Button onClick={newAppointmentHandler}>New Appointment</Button>
        </div>
        <div className="detail-line">
          <div>
            <h4>
              TOTAL APPOINTMENT:
              {AppointmentCount.length}
            </h4>
          </div>
        </div>
      </div>

      <h2>Filter</h2>
      <div className="picker">
        <DatePicker dateValue={filterDate} setDateValue={setFilterDate} />
      </div>
      <div>
        <div className="line">
          <TextField
            placeholder="FirstName"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <TextField
            placeholder="Tag"
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentRight;
