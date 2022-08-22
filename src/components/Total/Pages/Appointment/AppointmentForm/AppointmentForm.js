import React, { useState, useEffect } from "react";
import "./AppointmentForm.css";
import Button from "../../../../../UI/Button/Button";
import DatePicker from "../../../../../UI/DatePicker/DatePicker";
import DetailCard from "../../../../../UI/DetailCard/DetailCard";
import { TextField } from "@mui/material";
// import { UserAuth } from "../../../../../context/AuthContext";
// import { db } from "../../../../../firebase";
// import { updateDoc, doc, onSnapshot } from "firebase/firestore";
// import { async } from "@firebase/util";

const AppointmentForm = ({
  newAppointmentState,
  setAddAppointmentState,
  patients,
  appointmentEditState,
  setAppointmentEditState,
  selectedPatientEdit,
}) => {
  // const { user } = UserAuth();

  // const [patients, setPatients] = useState([]);

  // useEffect(() => {
  //   onSnapshot(doc(db, `users`, `${user?.email}`), (doc) => {
  //     setPatients(doc.data()?.patientList);
  //   });
  // }, [user?.email]);

  // console.log(patients);

  const [patientFound, setPatientFound] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState();

  const [tagValue, setTagValue] = useState(
    appointmentEditState ? selectedPatientEdit?.official.tag : ""
  );

  const [dateValue, setDateValue] = useState(new Date());

  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentPurpose, setAppointmentPurpose] = useState("");

  const findPatient = (id) => {
    const [patientSelected] = patients.filter(
      (item) => item?.official.tag === id
    );
    if (patientSelected) {
      setSelectedPatient(patientSelected);
      setPatientFound(() => true);
    }
    if (!patientSelected) {
      return;
    }
  };

  const cancelHandler = () => {
    if (newAppointmentState) {
      setAddAppointmentState(() => false);
    }
    if (appointmentEditState) {
      setAppointmentEditState(() => false);
    }
  };

  // const patientID = doc(db, "users", `${user?.email}`);

  const addHandler = (e) => {
    e.preventDefault();

    // await updateDoc(patientID, {

    if (appointmentTime === "" || appointmentPurpose === "") {
      alert(`Please check whether all fields are filled`);
    } else {
      if (patientFound) {
        selectedPatient.appointment.appointment = "yes";
        if (!appointmentEditState) {
          const newDate = `${dateValue.getDate()}-${
            dateValue.getMonth() + 1
          }-${dateValue.getFullYear()}`;

          selectedPatient.appointment.date = newDate;
        }
        if (appointmentEditState) {
          const editDate = `${dateValue.getDate()}-${
            dateValue.getMonth() + 1
          }-${dateValue.getFullYear()}`;

          selectedPatient.appointment.date = editDate;

          console.log(editDate);
        }
        selectedPatient.appointment.time = appointmentTime;
        selectedPatient.appointment.purpose = appointmentPurpose;
        // --------billing-------
        selectedPatient.billing.billing = "no";

        cancelHandler();
      }
      // });

      if (!patientFound) {
        return;
      }
    }
  };

  return (
    <div className="appointment-form">
      <div className="left">
        <h2>{newAppointmentState ? `NEW APPOINTMENT` : `EDIT APPOINTMENT`}</h2>
        <div></div>
        <div className="search-line">
          <div>
            <h3>Enter Patient Tag</h3>

            <TextField
              type={"text"}
              placeholder="Tag"
              label="Tag"
              variant="outlined"
              value={tagValue}
              onChange={(e) => {
                setTagValue(e.target.value);
              }}
            />
          </div>
          <div>
            <Button onClick={() => findPatient(tagValue)}>Search</Button>
          </div>
        </div>
        <div className="detail-card">
          {patientFound && <DetailCard selectedPatient={selectedPatient} />}
          {!patientFound && <>No Patient Found</>}
        </div>
      </div>

      <div className="right">
        <h3>Enter Appointment Details</h3>
        <div className="calendar">
          <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
        </div>
        <div className="text-area">
          <div>
            <TextField
              type={"time"}
              placeholder="Time"
              label="Time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              type={"text"}
              placeholder="Purpose"
              label="Purpose"
              value={appointmentPurpose}
              onChange={(e) => setAppointmentPurpose(e.target.value)}
              variant="outlined"
            />
          </div>
        </div>

        <div className="btn-area">
          <div>
            <Button cName={`cancel`} onClick={cancelHandler}>
              Cancel
            </Button>
          </div>
          <div>
            <Button onClick={addHandler}>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
