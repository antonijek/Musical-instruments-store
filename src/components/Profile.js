import { React, useContext } from "react";
import { UserContext } from "./UserContext";
import "../styles/Profile.css";
import {
  Button,
  Typography,
  Stack,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="profile">
      <img className="profile-img" src="../images/ana.jpg" alt="img" />
      <Typography variant="h4">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="h6">Preostali iznos: {user.funds} Euro</Typography>

      <Typography variant="h6">See your previus orders:</Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "center" }}
        sx={{ my: 3 }}
      >
        <Card sx={{ maxWidth: "100%", margin: "1%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="images/pianos.jpg"
              alt="img"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Piano
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: "100%", margin: "5%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="images/guitars.jpg"
              alt="img"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div">
                Guitar
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
      <Button variant="contained">Logout</Button>
    </div>
  );
};

export default Profile;
