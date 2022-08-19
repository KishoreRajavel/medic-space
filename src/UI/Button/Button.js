import React from "react";
import "./Button.css";

const Button = ({ children, onClick, type, cName }) => {
  return (
    <button className={`btn ${cName}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
