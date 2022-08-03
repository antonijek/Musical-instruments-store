import { React, useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Table from "./Table";
import "../styles/admin.css";
import { Box } from "@mui/material";
import { getInstrumentsByAdmin, getUsers } from "../api";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const AdminPanel = () => {
  const [title, setTitle] = useState();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  let token = localStorage.getItem("token");
  const renderRating = () => {
    return <EditSharpIcon />;
  };

  const usersColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "funds", headerName: "Funds", width: 130 },
    {
      field: "verified",
      headerName: "verified",
      width: 60,
    },
    { field: "edit", headerName: "Edit", width: 60, renderCell: renderRating },
  ];
  const instrumentsColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "color", headerName: "Color", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "quantity", headerName: "Quantity", width: 130 },
    { field: "weight", headerName: "Weight", width: 130 },
    { field: "edit", headerName: "Edit", width: 60, renderCell: renderRating },
  ];

  const getAllInstruments = async () => {
    const res = await getInstrumentsByAdmin(token);

    setRows(res.data.data);
    setTitle("Instruments");
    setColumns(instrumentsColumns);
  };

  const getAllUsers = async () => {
    const res = await getUsers(token);

    setRows(res.data.data);
    setTitle("Users");
    setColumns(usersColumns);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="grid-admin">
      <Dashboard
        className="grid-item"
        title={title}
        setTitle={setTitle}
        rows={rows}
        setRows={setRows}
        columns={columns}
        setColumns={setColumns}
        getAllInstruments={getAllInstruments}
        getAllUsers={getAllUsers}
      />
      <Box>
        <Table
          className="grid-item"
          title={title}
          setTitle={setTitle}
          rows={rows}
          setRows={setRows}
          columns={columns}
          setColumns={setColumns}
        />
      </Box>
    </div>
  );
};

export default AdminPanel;
