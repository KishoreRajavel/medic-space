import React from "react";
import "./BillingList.css";
import Button from "../../../../../UI/Button/Button";
import List from "./List";

const BillingList = ({ setBillingListState, patients }) => {
  const unBilledPatient = patients.filter(
    (item) =>
      item.billing.billing === "no" && item.appointment.appointment === "yes"
  );

  const BilledPatient = patients.filter(
    (item) => item.billing.billing === "yes"
  );

  return (
    <div className="billing-list">
      <h2>BillingList</h2>
      <div className="list">
        <div className="list">
          <div className="li">
            <h4>Unbilled Patients</h4>
            <List patients={unBilledPatient} billState={false} />
          </div>
        </div>
        <div className="list">
          <div className="li">
            <h4>Billed Patients</h4>
            <List patients={BilledPatient} billState={true} />
          </div>
        </div>
      </div>
      <div>
        <Button onClick={() => setBillingListState(false)}>Back</Button>
      </div>
    </div>
  );
};

export default BillingList;
