import React from "react";
import "./DetailCard.css";
import { FaUserAlt } from "react-icons/fa";

const DetailCard = ({ selectedPatient }) => {
  return (
    <div className="detail-card">
      <div>
        <FaUserAlt style={{ fontSize: "4rem" }} />
      </div>
      <h2>
        {selectedPatient.personal.FirstName || "none"}
        {selectedPatient.personal.LastName}
      </h2>
      <h2>{selectedPatient.official.tag}</h2>
      <div className="details">
        <div className="details-line">
          <div>
            <h4 className="h4">BIO</h4>
          </div>
          <div className="line">
            <div className="line">
              <h4>DoB:</h4>
              <p>{selectedPatient.personal.DoB}</p>
            </div>
            <div className="line">
              <h4>Age:</h4>
              <p>{selectedPatient.personal.Age}</p>
            </div>
            <div className="line">
              <h4>Gender:</h4>
              <p>{selectedPatient.personal.Gender}</p>
            </div>
          </div>
        </div>
        <div className="details-line">
          <div className="line">
            <div className="line">
              <h4>Mobile:</h4>
              <p>{selectedPatient.personal.Mobile}</p>
            </div>
            <div className="line">
              <h4>Martial Status:</h4>
              <p>{selectedPatient.personal.MartialStatus}</p>
            </div>
          </div>
        </div>
        <div className="details-line">
          <div className="line">
            <div className="line">
              <h4>FatherName:</h4>
              <p>{selectedPatient.personal.FatherName}</p>
            </div>
            <div className="line">
              <h4>Email:</h4>
              <p>{selectedPatient.personal.Email}</p>
            </div>
          </div>
        </div>
        <div className="details-line">
          <div>
            <h4 className="h4">ADDRESS</h4>
          </div>
          <div className="line">
            {selectedPatient.personal.Address},
            {selectedPatient.personal.District},{selectedPatient.personal.State}
            ,{selectedPatient.personal.Country}
          </div>
          <div>{selectedPatient.personal.Pincode}</div>
        </div>
        <div className="details-line">
          <div>
            <h4 className="h4">GUARDIAN</h4>
          </div>
          <div className="line">
            <div className="line">
              <h4>Name:</h4>
              <p>
                {selectedPatient.guardian.FirstName}
                {selectedPatient.guardian.LastName}
              </p>
            </div>
            <div className="line">
              <h4>Relationship:</h4>
              <p>{selectedPatient.guardian.Relationship}</p>
            </div>
          </div>
          <div className="line">
            <h4>Mobile:</h4>
            <p>{selectedPatient.guardian.Mobile}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
