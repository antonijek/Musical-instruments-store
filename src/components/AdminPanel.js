import { React, useState } from "react";
import Dashboard from "./Dashboard";
import Table from "./Table";
import "../styles/admin.css";
import { Box } from "@mui/material";

const AdminPanel = () => {
  const [title, setTitle] = useState();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

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
