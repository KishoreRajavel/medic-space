import React, { useEffect, useState } from "react";
import "./Appointment.css";
import AppointmentRight from "./AppointmentRight";
import AppointmentTable from "./AppointmentTable";
import NewAppointment from "./NewAppointment";
import Modal from "../../../../UI/Modal/Modal";
import DetailCard from "../../../../UI/DetailCard/DetailCard";
import Delete from "../../../Events/Delete/Delete";
import EditAppointment from "./EditAppointment";
import PatientList from "../Patients/PatientsList";
// import { UserAuth } from "../../../../context/AuthContext";
// import { db } from "../../../../firebase";
// import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const Appointment = () => {
  // const { user } = UserAuth();

  const [patients, setPatients] = useState(PatientList);

  // useEffect(() => {
  //   onSnapshot(doc(db, `users`, `${user?.email}`), (doc) => {
  //     setPatients(doc.data()?.patientList);
  //   });
  // }, [user?.email]);

  // const [arrivedCountValue, setArrivedCountValue] = useState(0);

  // -------date-----
  const [dateValue, setDateValue] = useState(new Date());

  // -----filter------
  const [filterName, setFilterName] = useState("");
  const [filterTag, setFilterTag] = useState("");

  // ----filterDate------
  const [filterDate, setFilterDate] = useState(new Date());

  const [newAppointmentState, setNewAppointmentState] = useState(false);

  const [appointmentEditState, setAppointmentEditState] = useState(false);
  const [appointmentDeleteState, setAppointmentDeleteState] = useState(false);
  const [appointmentProfileState, setAppointmentProfileState] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientProfile = (id) => {
    const [patient] = patients.filter((item) => item.official.tag === id);
    setSelectedPatient(() => patient);
    setAppointmentProfileState(() => true);
  };

  const handleAppointmentDelete = (id) => {
    const [patient] = patients.filter((item) => item.official.tag === id);
    setSelectedPatient(() => patient);
    setAppointmentDeleteState(() => true);
  };

  const handleAppointmentEdit = (id) => {
    const [patient] = patients.filter((item) => item.official.tag === id);
    setSelectedPatient(() => patient);
    setAppointmentEditState(() => true);
  };

  return (
    <div className="appointment-total">
      {!newAppointmentState && !appointmentEditState && (
        <>
          <div className="appointment-left">
            <h2>Appointment</h2>

            <AppointmentTable
              handlePatientProfile={handlePatientProfile}
              handleAppointmentDelete={handleAppointmentDelete}
              handleAppointmentEdit={handleAppointmentEdit}
              // setArrivedCountValue={setArrivedCountValue}
              // ----
              filterName={filterName}
              filterTag={filterTag}
              filterDate={filterDate}
            />
          </div>
          <div className="appointment-right">
            <AppointmentRight
              setNewAppointmentState={setNewAppointmentState}
              // arrivedCountValue={arrivedCountValue}
              patients={patients}
              // ----
              filterName={filterName}
              setFilterName={setFilterName}
              filterTag={filterTag}
              setFilterTag={setFilterTag}
              // -----
              filterDate={filterDate}
              setFilterDate={setFilterDate}
            />
          </div>
        </>
      )}
      {newAppointmentState && !appointmentEditState && (
        <NewAppointment
          setAddAppointmentState={setNewAppointmentState}
          patients={patients}
          newAppointmentState={newAppointmentState}
          // ------date-------
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
      )}
      {appointmentEditState && !newAppointmentState && (
        <EditAppointment
          patients={patients}
          appointmentEditState={appointmentEditState}
          setAppointmentEditState={setAppointmentEditState}
          selectedPatient={selectedPatient}
          // -----date------
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
      )}
      {appointmentProfileState && (
        <Modal onClose={() => setAppointmentProfileState(false)}>
          <DetailCard selectedPatient={selectedPatient} />
        </Modal>
      )}
      {appointmentDeleteState && (
        <Delete
          appointmentDeleteState={appointmentDeleteState}
          selectedPatient={selectedPatient}
          patients={patients}
          setAppointmentDeleteState={setAppointmentDeleteState}
        />
      )}
    </div>
  );
};

export default Appointment;
