import { React, useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Table from "./Table";
import "../styles/admin.css";
import { Box, CircularProgress } from "@mui/material";
import { getInstrumentsByAdmin, getUsers } from "../api";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const AdminPanel = () => {
  const [title, setTitle] = useState();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  let token = localStorage.getItem("token");
  const renderRating = () => {
    return <EditSharpIcon />;
  };

  const usersColumns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "first_name", headerName: "First name", width: 150 },
    { field: "last_name", headerName: "Last name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "funds", headerName: "Funds", width: 130 },
    {
      field: "verified",
      headerName: "verified",
      width: 100,
    },
    { field: "edit", headerName: "Edit", width: 60, renderCell: renderRating },
  ];
  const instrumentsColumns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "name", headerName: "Name", width: 280 },
    { field: "color", headerName: "Color", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "quantity", headerName: "Quantity", width: 130 },
    { field: "weight", headerName: "Weight", width: 130 },
    { field: "edit", headerName: "Edit", width: 60, renderCell: renderRating },
  ];

  const getAllInstruments = async () => {
    setLoading(true);
    try {
      const res = await getInstrumentsByAdmin(token);
      setRows(res.data.data);
      setTitle("Instruments");
      setColumns(instrumentsColumns);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers(token);
      setRows(res.data.data);
      setTitle("Users");
      setColumns(usersColumns);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
          getAllUsers={getAllUsers}
          getAllInstruments={getAllInstruments}
        />
        {loading ? (
          <CircularProgress sx={{ display: "block", mx: "auto" }} />
        ) : null}
      </Box>
    </div>
  );
};

export default AdminPanel;
