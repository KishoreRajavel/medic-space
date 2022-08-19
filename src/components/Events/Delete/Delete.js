import React from "react";
import "./Delete.css";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";

const Delete = ({
  setDeleteState,
  selectedPatient,
  patients,
  setPatients,
  deleteState,
  appointmentDeleteState,
  setAppointmentDeleteState,
}) => {
  const cancelHandler = () => {
    if (deleteState) {
      setDeleteState(() => false);
    }
    if (appointmentDeleteState) {
      setAppointmentDeleteState(() => false);
    }
  };

  const deleteHandler = () => {
    if (deleteState) {
      setPatients(() => patients.filter((item) => item !== selectedPatient));
      setDeleteState(() => false);
    }

    if (appointmentDeleteState) {
      selectedPatient.appointment.appointment = "no";
      setAppointmentDeleteState(() => false);
    }
  };

  return (
    <Modal onClose={cancelHandler}>
      <div className="delete-total">
        <h3>Remove</h3>
        <p>Are you sure you want to delete this patient from the list?</p>
        <div>
          <h4>Patient Name</h4>
          {selectedPatient.personal.FirstName}
        </div>
        <div>
          <h4>Patient Tag</h4>
          {selectedPatient.official.tag}
        </div>
        <div className="btn-area">
          <Button cName={`cancel`} onClick={cancelHandler}>
            Cancel
          </Button>
          <Button cName={`red`} onClick={deleteHandler}>
            Remove
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Delete;
