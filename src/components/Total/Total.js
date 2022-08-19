import React from "react";
import "./Total.css";
import Sidebar from "./Main/Sidebar/Sidebar";
import Body from "./Main/Body/Body";

const Total = () => {
  return (
    <div className="total">
      <div className="total-sidebar">
        <Sidebar />
      </div>
      <div className="total-body">
        <Body />
      </div>
    </div>
  );
};

export default Total;
