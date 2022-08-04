import { React, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import PianoSharpIcon from "@mui/icons-material/PianoSharp";

const Dashboard = ({ getAllUsers, getAllInstruments }) => {
  let token = localStorage.getItem("token");

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
