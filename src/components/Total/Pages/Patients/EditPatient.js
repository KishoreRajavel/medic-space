import React from "react";
import PatientForm from "./PatientForm/PatientForm";

const EditPatient = ({
  setEditPatientState,
  editPatientState,
  newPatientState,
  selectedPatient,
  setPatients,
  patients,
}) => {
  const cancelHandler = () => {
    setEditPatientState(() => false);
  };

  return (
    <>
      <PatientForm
        setPatientTag={selectedPatient.official.tag}
        cancelHandler={cancelHandler}
        editPatientState={editPatientState}
        newPatientState={newPatientState}
        selectedPatient={selectedPatient}
        setPatients={setPatients}
        patients={patients}
      />
    </>
  );
};

export default EditPatient;
