import React from "react";
import Dashboard from "./Dashboard";
import Table from "./Table";
import "../styles/admin.css";
import { Box, Typography } from "@mui/material";

const AdminPanel = () => {
  return (
    <div className="grid-admin">
      <Dashboard className="grid-item" />
      <Box sx={{ my: "auto" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: "5%", color: "text.secondary" }}
        >
          Users
        </Typography>
        <Table className="grid-item" />
      </Box>
    </div>
  );
};

export default AdminPanel;
