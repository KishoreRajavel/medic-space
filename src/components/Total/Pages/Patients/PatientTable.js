import React from "react";
import "./PatientTable.css";
import TableUI from "../../../../UI/Table/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PatientAction from "../../../../UI/PatientActionBox/PatientAction";

const PatientTable = ({
  patients,
  handlePatientEdit,
  handlePatientDelete,
  handlePatientProfile,
  filterName,
  filterTag,
}) => {
  return (
    <div className="table-patient">
      <TableUI
        head={
          <>
            <TableCell align="center">Patient</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Tag</TableCell>
            <TableCell align="center">Action</TableCell>
          </>
        }
        body={
          <>
            {patients
              .filter((item) => {
                return filterTag.toLowerCase() === "" &&
                  filterName.toLowerCase() === ""
                  ? item
                  : item.official.tag.toLowerCase().includes(filterTag) &&
                      item.personal.FirstName.toLowerCase().includes(
                        filterName
                      );
              })
              ?.map((item, i) => (
                <TableRow key={item.official.tag}>
                  <TableCell>{item.personal.FirstName}</TableCell>
                  <TableCell>{item.personal.Age}</TableCell>
                  <TableCell>{item.personal.Gender}</TableCell>
                  <TableCell>{item.personal.Mobile}</TableCell>
                  <TableCell>{item.official.tag}</TableCell>
                  <TableCell>
                    <PatientAction
                      onClickEdit={() => handlePatientEdit(item.official.tag)}
                      onClickDelete={() =>
                        handlePatientDelete(item.official.tag)
                      }
                      onClickProfile={() =>
                        handlePatientProfile(item.official.tag)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
          </>
        }
      ></TableUI>
    </div>
  );
};

export default PatientTable;
