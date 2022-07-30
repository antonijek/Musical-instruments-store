import { React, useState } from "react";
import Dashboard from "./Dashboard";
import Table from "./Table";
import "../styles/admin.css";
import { Box, Typography } from "@mui/material";

const AdminPanel = () => {
  const [title, setTitle] = useState();
  const [instruments, setInstruments] = useState([]);

  return (
    <div className="grid-admin">
      <Dashboard
        className="grid-item"
        title={title}
        setTitle={setTitle}
        instruments={instruments}
        setInstruments={setInstruments}
      />
      <Box>
        <Table
          className="grid-item"
          title={title}
          setTitle={setTitle}
          instruments={instruments}
          setInstruments={setInstruments}
        />
      </Box>
    </div>
  );
};

export default AdminPanel;
