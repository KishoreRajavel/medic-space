import React, { useState } from "react";
import "./PatientForm.css";
import { TextField } from "@mui/material";
import Button from "../../../../../UI/Button/Button";

const PatientForm = ({
  cancelHandler,
  patients,
  setPatients,
  setPatientTag,
  editPatientState,
  newPatientState,

  selectedPatient,
}) => {
  // -----personal-------

  const [firstName, setFirstName] = useState(
    editPatientState ? selectedPatient.personal.FirstName : ""
  );
  const [lastName, setLastName] = useState(
    editPatientState ? selectedPatient.personal.LastName : ""
  );
  const [gender, setGender] = useState(
    editPatientState ? selectedPatient.personal.Gender : ""
  );
  const [dob, setDob] = useState(
    editPatientState ? selectedPatient.personal.DoB : ""
  );
  const [age, setAge] = useState(
    editPatientState ? selectedPatient.personal.Age : ""
  );
  const [mobile, setMobile] = useState(
    editPatientState ? selectedPatient.personal.Mobile : ""
  );
  const [martialStatus, setMartialStatus] = useState(
    editPatientState ? selectedPatient.personal.MartialStatus : ""
  );
  const [fatherName, setFatherName] = useState(
    editPatientState ? selectedPatient.personal.FatherName : ""
  );
  const [email, setEmail] = useState(
    editPatientState ? selectedPatient.personal.Email : ""
  );
  const [occupation, setOccupation] = useState(
    editPatientState ? selectedPatient.personal.Occupation : ""
  );
  const [address, setAddress] = useState(
    editPatientState ? selectedPatient.personal.Address : ""
  );
  const [district, setDistrict] = useState(
    editPatientState ? selectedPatient.personal.District : ""
  );
  const [state, setState] = useState(
    editPatientState ? selectedPatient.personal.State : ""
  );
  const [country, setCountry] = useState(
    editPatientState ? selectedPatient.personal.Country : ""
  );
  const [pinCode, setPinCode] = useState(
    editPatientState ? selectedPatient.personal.Pincode : ""
  );

  // ------official------

  // ------gaurdian-----

  const [gaurdianFirstname, setGaurdianFirstName] = useState(
    editPatientState ? selectedPatient.guardian.FirstName : ""
  );
  const [gaurdianLastname, setGaurdianLastName] = useState(
    editPatientState ? selectedPatient.guardian.LastName : ""
  );
  const [gaurdianMobile, setGaurdianMobile] = useState(
    editPatientState ? selectedPatient.guardian.Mobile : ""
  );
  const [gaurdianRelation, setGaurdianrelation] = useState(
    editPatientState ? selectedPatient.guardian.Relationship : ""
  );
  const [gaurdianAddress, setGaurdianAddress] = useState(
    editPatientState ? selectedPatient.guardian.Address : ""
  );

  // ----events------

  const addPatientHandler = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !gender ||
      !dob ||
      !age ||
      !mobile ||
      !martialStatus ||
      !fatherName ||
      !email ||
      !occupation ||
      !address ||
      !district ||
      !state ||
      !country ||
      !pinCode ||
      !gaurdianFirstname ||
      !gaurdianLastname ||
      !gaurdianMobile ||
      !gaurdianAddress ||
      !gaurdianRelation
    ) {
      alert(`Please check all fields are filled`);
    } else {
      const newPatient = {
        personal: {
          FirstName: firstName,
          LastName: lastName,
          Gender: gender,
          DoB: dob,
          Age: age,
          Mobile: mobile,
          FatherName: fatherName,
          MartialStatus: martialStatus,
          Email: email,
          Occupation: occupation,
          Address: address,
          District: district,
          State: state,
          Country: country,
          Pincode: pinCode,
        },
        official: {
          tag: setPatientTag,
        },
        guardian: {
          FirstName: gaurdianFirstname,
          LastName: gaurdianLastname,
          Mobile: gaurdianMobile,
          Relationship: gaurdianRelation,
          Address: gaurdianAddress,
        },
        appointment: {
          appointment: "no",
          date: "",
          purpose: "",
          time: "",
        },
        billing: {
          billing: "",
          amount: "",
          paymentType: "",
        },
      };

      if (editPatientState) {
        const id = selectedPatient.official.tag;

        for (let i = 0; i < patients.length; i++) {
          if (patients[i].official.tag === id) {
            patients.splice(i, 1, newPatient);
            break;
          }

          cancelHandler();
        }
      }

      if (newPatientState) {
        patients.push(newPatient);
        setPatients((prev) => {
          return [...prev];
        });
        cancelHandler();
      } else {
        alert(`error`);
      }
    }
  };

  return (
    <div className="new-patient">
      <div className="newpatient-form">
        <h1>{newPatientState ? `NEW PATIENT` : `EDIT PATIENT`}</h1>
        <h3>PATIENT INFORMATION</h3>
        <div className="input-line">
          <TextField
            type={"text"}
            className="input"
            label="First Name"
            onChange={(e) => setFirstName(() => e.target.value)}
            value={firstName}
          />

          <TextField
            type={"text"}
            className="input"
            label="Last Name"
            onChange={(e) => setLastName(() => e.target.value)}
            value={lastName}
          />
          <TextField
            type={"text"}
            className="input"
            label="Gender"
            onChange={(e) => setGender(() => e.target.value)}
            value={gender}
          />
          <TextField
            style={{ width: 225 }}
            type={"text"}
            className="input"
            label="Date of
            Birth"
            onChange={(e) => setDob(() => e.target.value)}
            value={dob}
          />
          <TextField
            type={"number"}
            className="input"
            label="Age"
            onChange={(e) => setAge(() => e.target.value)}
            value={age}
          />
        </div>
        <div className="input-line">
          <TextField
            type="number"
            className="input"
            label="Mobile No"
            onChange={(e) => setMobile(() => e.target.value)}
            value={mobile}
          />
          <TextField
            type={"text"}
            className="input"
            label="Martial Status"
            onChange={(e) => setMartialStatus(() => e.target.value)}
            value={martialStatus}
          />
          <TextField
            type={"text"}
            className="input"
            label="Father Name"
            onChange={(e) => setFatherName(() => e.target.value)}
            value={fatherName}
          />
          <TextField
            type={"email"}
            className="input"
            label="Email"
            onChange={(e) => setEmail(() => e.target.value)}
            value={email}
          />
          <TextField
            type={"text"}
            className="input"
            label="Occupation"
            onChange={(e) => setOccupation(() => e.target.value)}
            value={occupation}
          />
        </div>
        <h3>ADDRESS</h3>
        <div className="input-line">
          <TextField
            type={"text"}
            className="input"
            label="Address"
            onChange={(e) => setAddress(() => e.target.value)}
            value={address}
          />
          <TextField
            type={"text"}
            className="input"
            label="District"
            onChange={(e) => setDistrict(() => e.target.value)}
            value={district}
          />
          <TextField
            type={"text"}
            className="input"
            label="Country"
            onChange={(e) => setCountry(() => e.target.value)}
            value={country}
          />
          <TextField
            type={"text"}
            className="input"
            label="State"
            onChange={(e) => setState(() => e.target.value)}
            value={state}
          />

          <TextField
            type={"number"}
            className="input"
            label="Pincode"
            onChange={(e) => setPinCode(() => e.target.value)}
            value={pinCode}
          />
        </div>

        <h3>EMERGENCY CONTACT</h3>
        <div className="input-line">
          <TextField
            type={"text"}
            className="input"
            label="First Name"
            onChange={(e) => setGaurdianFirstName(() => e.target.value)}
            value={gaurdianFirstname}
          />
          <TextField
            type={"text"}
            className="input"
            label="Last Name"
            onChange={(e) => setGaurdianLastName(() => e.target.value)}
            value={gaurdianLastname}
          />
          <TextField
            type={"number"}
            className="input"
            label="Mobile"
            onChange={(e) => setGaurdianMobile(() => e.target.value)}
            value={gaurdianMobile}
          />

          <TextField
            type={"text"}
            className="input"
            label="Relationship"
            onChange={(e) => setGaurdianrelation(() => e.target.value)}
            value={gaurdianRelation}
          />
          <TextField
            type={"text"}
            className="input"
            label="Address"
            onChange={(e) => setGaurdianAddress(() => e.target.value)}
            value={gaurdianAddress}
          />
        </div>

        <div className="btn-area">
          <div>
            <Button cName={`cancel`} onClick={cancelHandler}>
              CANCEL
            </Button>
          </div>
          <div>
            <Button onClick={addPatientHandler}>
              {editPatientState ? `UPDATE` : `ADD`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
