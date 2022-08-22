import React, { useState } from "react";
import "./BillingRight.css";
import TextField from "@mui/material/TextField";
import Button from "../../../../UI/Button/Button";
import Card from "../../../../UI/Card/Card";
import Checkbox from "@mui/material/Checkbox";
import { BsCreditCard2Front } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { SiLiberapay } from "react-icons/si";
import { RiBankLine, RiHandHeartLine } from "react-icons/ri";

const BillingRight = ({ selectedPatient, patientFoundState }) => {
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const [cashMethod, setCashMethod] = useState(false);
  const [cardMethod, setCardMethod] = useState(false);
  const [bankTransferMethod, setBankTransferMethod] = useState(false);
  const [upiMethod, setUpiMethod] = useState(false);
  const [insuranceMethod, setInsuranceMethod] = useState(false);

  const cashSelectorHandler = (e) => {
    setCashMethod((prev) => !prev);
    setCardMethod(() => false);
    setBankTransferMethod(() => false);
    setUpiMethod(() => false);
    setInsuranceMethod(() => false);
    setPaymentType(() => e.target.value);
  };

  const cardSelectorHandler = (e) => {
    setCardMethod((prev) => !prev);
    setCashMethod(() => false);
    setBankTransferMethod(() => false);
    setInsuranceMethod(() => false);
    setUpiMethod(() => false);
    setPaymentType(() => e.target.value);
  };

  const bankTransferSelectorHandler = (e) => {
    setBankTransferMethod((prev) => !prev);
    setCardMethod(() => false);
    setCashMethod(() => false);
    setInsuranceMethod(() => false);
    setUpiMethod(() => false);
    setPaymentType(() => e.target.value);
  };

  const upiSelectorHandler = (e) => {
    setUpiMethod((prev) => !prev);
    setCashMethod(() => false);
    setCardMethod(() => false);
    setBankTransferMethod(() => false);
    setInsuranceMethod(() => false);
    setPaymentType(() => e.target.value);
  };

  const insuranceSelectorHandler = (e) => {
    setInsuranceMethod((prev) => !prev);
    setCashMethod(() => false);
    setCardMethod(() => false);
    setBankTransferMethod(() => false);
    setUpiMethod(() => false);
    setPaymentType(() => e.target.value);
    setPaymentType(() => e.target.value);
  };

  const BillPaymentHandler = () => {
    if (
      patientFoundState &&
      selectedPatient.appointment.appointment === "yes"
    ) {
      if (amount === "" || paymentType === "") {
        selectedPatient.billing.billing = "yes";
        selectedPatient.billing.amount = amount;
        selectedPatient.billing.paymentType = paymentType;
      } else {
        alert(`Please check whether all fields were filled`);
      }
    } else {
      alert(`The Patient is not in the Appointment List `);
    }
  };

  return (
    <div className="billing-right">
      <h2>Billing Method</h2>
      <div className="list">
        <Card>
          <div className="al-c">
            <div>{amount}</div>
            <h4>Amount</h4>
          </div>
        </Card>
        <Card>
          <div className="al-c">
            <div>{paymentType}</div>
            <h4>Payment Type</h4>
          </div>
        </Card>
      </div>
      <h4>Choose paymentType</h4>
      <div className="payment-type">
        <div className="al-c">
          <BsCreditCard2Front />
          <h4>CARD</h4>
          <Checkbox
            value={"Card"}
            onChange={cardSelectorHandler}
            checked={cardMethod}
          />
        </div>
        <div className="al-c">
          <HiOutlineCurrencyRupee />
          <h4>CASH</h4>
          <Checkbox
            value={"Cash"}
            checked={cashMethod}
            onChange={cashSelectorHandler}
          />
        </div>
        <div className="al-c">
          <SiLiberapay />
          <h4>UPI</h4>
          <Checkbox
            value={"UPI"}
            checked={upiMethod}
            onChange={upiSelectorHandler}
          />
        </div>
        <div className="al-c">
          <RiBankLine />
          <h4>BANK TRANSFER</h4>
          <Checkbox
            value={"Bank Transfer"}
            checked={bankTransferMethod}
            onChange={bankTransferSelectorHandler}
          />
        </div>
        <div className="al-c">
          <RiHandHeartLine />
          <h4>INSURANCE</h4>
          <Checkbox
            value={"Insurance"}
            checked={insuranceMethod}
            onChange={insuranceSelectorHandler}
          />
        </div>
      </div>
      <div>Enter Amount</div>
      <div>
        <TextField
          placeholder="Amount"
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={BillPaymentHandler}>Confirm</Button>
      </div>
    </div>
  );
};

export default BillingRight;
