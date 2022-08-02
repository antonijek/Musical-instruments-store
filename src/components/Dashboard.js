import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CheckBox from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import PianoSharpIcon from "@mui/icons-material/PianoSharp";
import { getInstruments } from "../api";
import { getUsers } from "../api";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const Dashboard = ({ setTitle, setColumns, setRows, rows }) => {
  let token = localStorage.getItem("token");
  console.log(rows);
  const renderRating = () => {
    return <EditSharpIcon />;
  };
  const isVerified = (params) => {
    return <input type="checkbox" checked={params} />;
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
    const res = await getInstruments();
    console.log(res);
    setRows(res.data.data);
    setTitle("Instruments");
    setColumns(instrumentsColumns);
  };

  const getAllUsers = async () => {
    const res = await getUsers(token);
    console.log(res.data.data);
    setRows(res.data.data);
    setTitle("Users");
    setColumns(usersColumns);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: { xs: "50%", sm: "100%" },
        bgcolor: "text.secondary",
        color: "white",
        borderRadius: "5%",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ mb: 2 }}>
          <ListItem disablePadding sx={{ mb: "10%" }}>
            <ListItemButton onClick={getAllUsers}>
              <ListItemIcon>
                <GroupIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: "10%" }}>
            <ListItemButton onClick={getAllInstruments}>
              <ListItemIcon>
                <MusicNoteOutlinedIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Instruments" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: "10%" }}>
            <ListItemButton>
              <ListItemIcon>
                <PianoSharpIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Items" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: "10%" }}>
            <ListItemButton>
              <ListItemIcon>
                <ShowChartSharpIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider sx={{ bgcolor: "white" }} />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Items" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Statistics" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
export default Dashboard;
