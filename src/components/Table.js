import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getInstruments } from "../api";
import { Box, Typography } from "@mui/material";

const usersColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "delete", headerName: "Delete", width: 60 },
];
const instrumentsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "color", headerName: "Color", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "update", headerName: "Update", width: 130 },
  { field: "delete", headerName: "Delete", width: 60 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Table({
  title,
  setTitle,
  instruments,
  setInstruments,
}) {
  const test = (e) => {
    console.log(e);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", my: "5%", color: "text.secondary" }}
      >
        {title}
      </Typography>
      <DataGrid
        rows={instruments}
        columns={instrumentsColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        /* paginationMode="server"
        rowCount={31} */
        onRowClick={test}
      />
    </div>
  );
}
