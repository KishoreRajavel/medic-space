import React, { useState } from "react";
import "./AppointmentTable.css";
import TableUI from "../../../../UI/Table/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PatientAction from "../../../../UI/PatientActionBox/PatientAction";
import PatientStatus from "../../../../UI/PatientActionBox/PatientStatus/PatientStatus";
import useFilter from "../../../../hooks/useFilter";

const AppointmentTable = ({
  handlePatientProfile,
  handleAppointmentDelete,
  handleAppointmentEdit,
  setArrivedCountValue,
  filterName,
  filterTag,
  filterDate,
}) => {
  const filter = useFilter({ filterName, filterTag, filterDate });

  return (
    <div className="Appointmenttable-total">
      <TableUI
        head={
          <>
            <TableCell align="center">Patient</TableCell>
            <TableCell align="center">Token</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </>
        }
        body={
          <>
            {filter.map(
              (item, i) =>
                item.appointment.appointment === "yes" && (
                  <TableRow key={item.official.tag}>
                    <TableCell component="th">
                      {item.personal.FirstName}
                    </TableCell>
                    <TableCell align="center">{item.official.token}</TableCell>
                    <TableCell align="right">{item.appointment.date}</TableCell>
                    <TableCell align="right">{item.appointment.time}</TableCell>
                    <TableCell align="left">
                      <PatientStatus
                        setArrivedCountValue={setArrivedCountValue}
                      />
                    </TableCell>
                    <TableCell>
                      <PatientAction
                        onClickProfile={() =>
                          handlePatientProfile(item.official.tag)
                        }
                        onClickDelete={() =>
                          handleAppointmentDelete(item.official.tag)
                        }
                        onClickEdit={() =>
                          handleAppointmentEdit(item.official.tag)
                        }
                      />
                    </TableCell>
                  </TableRow>
                )
            )}
          </>
        }
      />
    </div>
  );
};

export default AppointmentTable;
