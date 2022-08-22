import React, { useEffect, useState } from "react";
import "./Patients.css";
import PatientRight from "./PatientRight";
import PatientTable from "./PatientTable";
import NewPatient from "./NewPatient";
import PatientList from "./PatientsList";
import EditPatient from "./EditPatient";
import Delete from "../../../Events/Delete/Delete";
import Modal from "../../../../UI/Modal/Modal";
import DetailCard from "../../../../UI/DetailCard/DetailCard";
// import { UserAuth } from "../../../../context/AuthContext";
// import { db } from "../../../../firebase";
// import { UpdateDoc, doc, onSnapshot } from "firebase/firestore";

const Patients = () => {
  // const [patients, setPatients] = useState([]);

  // const { user } = UserAuth();

  const [newPatientState, setNewPatientState] = useState(false);
  const [editPatientState, setEditPatientState] = useState(false);
  const [patientProfileState, setPatientprofileState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  const [patients, setPatients] = useState(PatientList);

  // useEffect(() => {
  //   onSnapshot(doc(db, `users`, `${user?.email}`), (doc) => {
  //     setPatients(doc.data()?.patintList);
  //   });
  // }, [user]);

  // useEffect(() => {
  //   onSnapshot(doc(db, `users`, `${user?.email}`), (doc) => {
  //     setPatients(doc.data()?.patientList);
  //   });
  // }, [user?.email]);

  // console.log(patients);
  // ------filter---------

  const [filterName, setFilterName] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientEdit = (id) => {
    const [patient] = patients.filter((item) => item.official.tag === id);
    setSelectedPatient(() => patient);
    setEditPatientState(() => true);
  };

  const handlePatientDelete = (id) => {
    const [patient] = patients.filter((item) => item?.official.tag === id);
    setSelectedPatient(() => patient);
    setDeleteState(() => true);
  };

  const handlePatientProfile = (id) => {
    const [patient] = patients.filter((item) => item?.official.tag === id);
    setSelectedPatient(() => patient);
    setPatientprofileState(() => true);
  };

  return (
    <div className="patients">
      {deleteState && (
        <Delete
          setDeleteState={setDeleteState}
          selectedPatient={selectedPatient}
          patients={patients}
          setPatients={setPatients}
          deleteState={deleteState}
        />
      )}
      {!newPatientState && !editPatientState && (
        <div className="patients-body">
          <h2>Patients</h2>
          <div className="patients-right">
            <PatientRight
              setNewPatientState={setNewPatientState}
              patients={patients}
              // ------
              filterName={filterName}
              setFilterName={setFilterName}
              filterTag={filterTag}
              setFilterTag={setFilterTag}
            />
          </div>
          <div className="patients-left">
            <PatientTable
              patients={patients}
              handlePatientEdit={handlePatientEdit}
              handlePatientDelete={handlePatientDelete}
              handlePatientProfile={handlePatientProfile}
              selectedPatient={selectedPatient}
              setPatients={setPatients}
              // ------
              filterName={filterName}
              filterTag={filterTag}
              // user={user}
            />
          </div>
        </div>
      )}
      {newPatientState && (
        <NewPatient
          patients={patients}
          setPatients={setPatients}
          setNewPatientState={setNewPatientState}
          newPatientState={newPatientState}
          editPatientState={editPatientState}
        />
      )}

      {editPatientState && (
        <EditPatient
          newPatientState={newPatientState}
          editPatientState={editPatientState}
          setEditPatientState={setEditPatientState}
          selectedPatient={selectedPatient}
          setPatients={setPatients}
          patients={patients}
        />
      )}
      {patientProfileState && (
        <Modal onClose={() => setPatientprofileState(() => false)}>
          <DetailCard selectedPatient={selectedPatient} />
        </Modal>
      )}
    </div>
  );
};

export default Patients;
