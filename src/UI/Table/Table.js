import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableUI = (props) => {
  const StyledTableHead = styled(TableRow)(({ theme }) => ({
    backgroundColor: "var(--primaryColor)",
    color: "var(--secondaryColor)",
  }));

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ height: "100%", width: "100%", maxHeight: "100%" }}
      >
        <Table
          style={{ minWidth: "fit-content" }}
          aria-label="customized table"
        >
          <TableHead>
            <StyledTableHead>{props.head}</StyledTableHead>
          </TableHead>
          <TableBody>{props.body}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableUI;
