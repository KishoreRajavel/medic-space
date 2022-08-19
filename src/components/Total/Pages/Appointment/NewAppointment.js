import React from "react";
import "./NewAppointment.css";
import AppointmentForm from "./AppointmentForm/AppointmentForm";

const NewAppointment = ({
  setAddAppointmentState,
  patients,
  newAppointmentState,
  dateValue,
  setDateValue,
}) => {
  return (
    <div className="new-appointment">
      <AppointmentForm
        setAddAppointmentState={setAddAppointmentState}
        patients={patients}
        newAppointmentState={newAppointmentState}
        newDateValue={dateValue}
        setNewDateValue={setDateValue}
      />
    </div>
  );
};

export default NewAppointment;
