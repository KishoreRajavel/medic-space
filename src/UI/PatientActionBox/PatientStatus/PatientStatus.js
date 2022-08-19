import React, { useState } from "react";
import "./PatientStatus.css";
import { FaUserCheck, FaStethoscope } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";

const PatientStatus = () => {
  const [arriveState, setArriveState] = useState(false);
  const [withDoctorState, setWithDoctorState] = useState(false);
  const [appointmentCompleted, setAppointmentCompleted] = useState(false);

  const cName1 = arriveState ? "clicked" : "";
  const cName2 = withDoctorState ? "clicked" : "";
  const cName3 = appointmentCompleted ? "clicked" : "";

  const arriveStateHandler = () => {
    setArriveState((prev) => !prev);
    setWithDoctorState(() => false);
    setAppointmentCompleted(() => false);
  };

  const withDoctorStateHandler = () => {
    setWithDoctorState((prev) => !prev);
    setArriveState(() => false);
    setAppointmentCompleted(() => false);
  };

  const appointmentCompletedHandler = () => {
    setAppointmentCompleted((prev) => !prev);
    setWithDoctorState(() => false);
    setArriveState(() => false);
  };

  return (
    <div className="status">
      <div className={`status-icon ${cName1}`} onClick={arriveStateHandler}>
        <RiTimerFill />
      </div>
      <div className={`status-icon ${cName2}`} onClick={withDoctorStateHandler}>
        <FaStethoscope />
      </div>
      <div
        className={`status-icon ${cName3}`}
        onClick={appointmentCompletedHandler}
      >
        <FaUserCheck />
      </div>
    </div>
  );
};

export default PatientStatus;
