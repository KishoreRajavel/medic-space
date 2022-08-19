import React from "react";
import PatientForm from "./PatientForm/PatientForm";
import { v4 as uuidv4 } from "uuid";

const NewPatient = ({
  setNewPatientState,
  patients,
  setPatients,
  newPatientState,
  editPatientState,
}) => {
  const cancelHandler = () => {
    setNewPatientState(() => false);
  };

  return (
    <>
      <PatientForm
        editPatientState={editPatientState}
        newPatientState={newPatientState}
        setPatientTag={uuidv4()}
        patients={patients}
        setPatients={setPatients}
        cancelHandler={cancelHandler}
      />
    </>
  );
};

export default NewPatient;
