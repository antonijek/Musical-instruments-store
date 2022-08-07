import { React, useContext } from "react";
import { UserContext } from "./UserContext";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import PianoSharpIcon from "@mui/icons-material/PianoSharp";

const Dashboard = ({ getAllUsers, getAllInstruments }) => {
  const { user } = useContext(UserContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: { xs: "50%", sm: "100%" },
        bgcolor: "#1976d2",
        color: "white",
      }}
    >
      <nav aria-label="main mailbox folders">
        <Divider sx={{ bgcolor: "white" }} />
        <List sx={{ mb: 4 }}>
          <Avatar
            sx={{
              mx: "auto",
              mt: "5%",
              width: { xs: "10vw", sm: "4vw" },
              height: { xs: "10vw", sm: "4vw" },
            }}
            src="/broken-image.jpg"
          />
          <Typography sx={{ textAlign: "center", mb: 4, mt: 2 }}>
            {user.first_name}
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <ListItem disablePadding sx={{ mb: "10%", mt: 8 }}>
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
          <ListItemButton>
            <ListItemIcon>
              <ShowChartSharpIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/statistic"
              style={{
                color: "white",
                textDecoration: "none",
                marginBottom: "10%",
              }}
            >
              <ListItemText primary="Statistics" />
            </Link>
          </ListItemButton>
          <ListItem disablePadding sx={{ mb: "10%" }}>
            <ListItemButton>
              <ListItemIcon>
                <PianoSharpIcon sx={{ color: "white" }} />
              </ListItemIcon>

              <ListItemText primary="Items" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: "10%" }}></ListItem>
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
