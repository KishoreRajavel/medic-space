import React from "react";
import AppointmentForm from "./AppointmentForm/AppointmentForm";

const EditAppointment = ({
  setAppointmentEditState,
  patients,
  selectedPatient,
  appointmentEditState,
  dateValue,
  setDateValue,
}) => {
  return (
    <div className="edit-appointment">
      <AppointmentForm
        setAppointmentEditState={setAppointmentEditState}
        patients={patients}
        selectedPatientEdit={selectedPatient}
        appointmentEditState={appointmentEditState}
        editDateValue={dateValue}
        setNewDateValue={setDateValue}
      />
    </div>
  );
};

export default EditAppointment;
