import { React, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import ItemInCart from "./ItemInCart";
import "../styles/Profile.css";
import { Button, Typography, Box, Divider } from "@mui/material";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <Box className="profile">
      <Typography
        sx={{ mb: "2vw", fontSize: { xs: "8vw", sm: "5vw" } }}
        color="text.secondary"
      >
        Account Profile
      </Typography>
      <Button sx={{ textTransform: "capitalize" }}></Button>
      <Divider
        sx={{
          width: { xs: "100%", sm: "70vw" },
          mx: "auto",
          backgroundColor: "black",
        }}
      />
      <img className="profile-img" src="../images/ana.jpg" alt="img" />
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "6vw", sm: "3vw" } }}
      >
        {user.first_name} {user.last_name}
      </Typography>
      <Typography
        sx={{ color: "text.secondary", fontSize: { xs: "5vw", sm: "2vw" } }}
      >
        Remaining balance: {user.funds} Euro
      </Typography>
      <Box>
        <Typography
          sx={{
            color: "text.secondary",
            mt: "10%",
            mb: { xs: "10%", sm: "5%" },
            fontSize: { xs: "5vw", sm: "2vw" },
          }}
        >
          Your previus orders:
        </Typography>
      </Box>
      <Divider />
      <ItemInCart
        desc="SKY Accordion Purple Color 7 Button 2 Bass Kid Music Instrument
                Easy to PlayGREAT GIFT"
        color="Blue"
        price={31}
        quantity={1}
        name="Guitar"
        img={"images/guitars.jpg"}
      />
      <Divider sx={{ mb: 1 }} />
      <Divider />
      <ItemInCart
        desc="Purple Color 7 Button 2 Bass Kid Music Instrument
                Easy"
        color="Red"
        price={210}
        quantity={1}
        name="Piano"
        img={"images/piano.jpg"}
      />
      <Divider />
    </Box>
  );
};

export default Profile;
