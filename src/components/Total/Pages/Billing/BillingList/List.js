import React from "react";
import "./List.css";
import TableUI from "../../../../../UI/Table/Table";
import { TableCell, TableRow } from "@mui/material";

const List = ({ patients, billState }) => {
  return (
    <div className="list-total">
      <TableUI
        head={
          <>
            <TableCell>No</TableCell>
            <TableCell>Patient Name</TableCell>
            <TableCell>Tag</TableCell>
            {billState && <TableCell>Amount</TableCell>}
          </>
        }
        body={
          <>
            {patients.map((item, i) => (
              <TableRow key={item.official.tag}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item.personal.FirstName}</TableCell>
                <TableCell>{item.official.tag}</TableCell>
                {billState && <TableCell>{item.billing.amount}</TableCell>}
              </TableRow>
            ))}
          </>
        }
      />
    </div>
  );
};

export default List;
