import React from "react";
import "./PatientAction.css";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const PatientAction = (props) => {
  return (
    <div className="action-row">
      <div className="icon" onClick={props.onClickEdit}>
        <MdModeEditOutline />
      </div>
      <div className="icon" onClick={props.onClickDelete}>
        <MdDelete />
      </div>
      <div className="icon" onClick={props.onClickProfile}>
        <FaUserAlt />
      </div>
    </div>
  );
};

export default PatientAction;
