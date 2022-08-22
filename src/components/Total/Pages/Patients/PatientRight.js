import React from "react";
import "./PatientRight.css";
import Button from "../../../../UI/Button/Button";
import { TextField } from "@mui/material";

const PatientRight = ({
  setNewPatientState,
  patients,
  filterName,
  setFilterName,
  filterTag,
  setFilterTag,
}) => {
  const newPatientFormHandler = () => {
    setNewPatientState(() => true);
  };

  // console.log(patients);
  const appointmentCount = patients.filter(
    (item) => item.appointment.appointment === "yes"
  ).length;

  return (
    <div className="patient-right-area">
      <div>
        <Button onClick={newPatientFormHandler}>New Patient</Button>
      </div>
      <div className="detail-line">
        <h4>Total Patients:{patients.length}</h4>
        <h4>Patients with appointment:{appointmentCount}</h4>
      </div>
      <div className="patient-right-filter">
        <h2>Filter</h2>
        <div className="text-area">
          <div>
            <TextField
              placeholder="First Name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              placeholder="Tag"
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRight;
