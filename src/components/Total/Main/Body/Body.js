import React, { useState } from "react";
import "./Body.css";
import { Routes, Route } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment";
import Patients from "../../Pages/Patients/Patients";
import Billing from "../../Pages/Billing/Billing";
import PatientList from "../../Pages/Patients/PatientsList";

const Body = ({}) => {
  const [patients, setPatients] = useState(PatientList);

  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route
          path="/Appointment"
          element={
            <Appointment patients={patients} setPatients={setPatients} />
          }
        />
        <Route
          path="/Patients"
          element={<Patients patients={patients} setPatients={setPatients} />}
        />
        <Route path="/Billing" element={<Billing patients={patients} />} />
      </Routes>
    </div>
  );
};

export default Body;
