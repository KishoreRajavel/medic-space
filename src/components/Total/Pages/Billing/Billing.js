import React, { useState } from "react";
import "./Billing.css";
import BillingList from "./BillingList/BillingList";
import DetailCard from "../../../../UI/DetailCard/DetailCard";
import TextField from "@mui/material/TextField";
import Button from "../../../../UI/Button/Button";

import BillingRight from "./BillingRight";

const Billing = ({ patients }) => {
  const [billingListstate, setBillingListState] = useState(false);

  const [patientFoundState, setPatientFoundState] = useState(false);

  const [tagValaue, setTagValue] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const searchHandler = () => {
    const [patientSelected] = patients.filter(
      (item) => item.official.tag === tagValaue
    );
    if (patientSelected) {
      setSelectedPatient(() => patientSelected);
      setPatientFoundState(() => true);
    }
    if (!patientSelected) {
      return;
    }
  };

  return (
    <div className="billing">
      {billingListstate && (
        <BillingList
          setBillingListState={setBillingListState}
          patients={patients}
        />
      )}
      {!billingListstate && (
        <>
          <div className="left">
            <h2>Billing</h2>
            <div className="line">
              <div className="search-area">
                <div>
                  <TextField
                    placeholder="Tag"
                    value={tagValaue}
                    onChange={(e) => setTagValue(e.target.value)}
                  />
                </div>
                <div>
                  <Button onClick={searchHandler}>Search</Button>
                </div>
              </div>
              <div>
                <Button onClick={() => setBillingListState(true)}>
                  View Billing List
                </Button>
              </div>
            </div>

            <div className="detail-area">
              {patientFoundState && (
                <DetailCard selectedPatient={selectedPatient} />
              )}
              {!patientFoundState && <div>No Match Found</div>}
            </div>
          </div>
          <div className="right">
            <BillingRight
              selectedPatient={selectedPatient}
              patientFoundState={patientFoundState}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Billing;
